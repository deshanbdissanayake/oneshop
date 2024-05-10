import { Alert, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import Header from '../components/general/Header'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { colors } from '../assets/colors/colors'
import { Foundation, FontAwesome6, Ionicons } from '@expo/vector-icons';
import MiniButton from '../components/general/MiniButton'
import { getAllNotificationsByUserId, markAsRead } from '../assets/data/notifications'
import LoadingScreen from './LoadingScreen'
import NoData from '../components/general/NoData'

const NotificationCard = ({cardData}) => {
    const [showAll, setShowAll] = useState(false);

    const { type, title, desc, dateTime, readStatus } = cardData;

    let bgColor;
    if(!readStatus){
        bgColor = colors.bgColorTer;
    }

    let icon = <Ionicons name="notifications-circle-outline" size={24} color={colors.textColorPri} />
    if(type == 'alert'){
        icon = <Foundation name="alert" size={24} color={colors.textColorPri} />
    }else if(type == 'order'){
        icon = <FontAwesome6 name="cart-shopping" size={18} color={colors.textColorPri} />
    }

    return (
        <View style={[styles.cardWrapper, {backgroundColor: bgColor}]}>
            <View style={styles.cardLeftWrapper}>
                {icon}
            </View>
            <View style={styles.cardRightWrapper}>
                <Pressable onPress={() => setShowAll(!showAll)}>
                    <Text style={styles.cardTitleTextStyles}>{title}</Text>
                    <Text style={styles.cardDescTextStyles} numberOfLines={showAll ? null : 2}>{desc}</Text>
                    <Text style={styles.cardDateTimeTextStyles}>{dateTime}</Text>
                </Pressable>
            </View>
        </View>
    );
}

const NotificationScreen = () => {
    const navigation = useNavigation();

    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleGoBack = () => {
        navigation.goBack();
    }

    const getData = async () => {
        try {
            let res = await getAllNotificationsByUserId()
            setNotifications(res);
        } catch (error) {
            console.error('error at notification screen getting notifications: ', error)
        } finally {
            setLoading(false)
        }
    }

    useFocusEffect(
        useCallback(()=> {
            getData();
        },[])
    )

    const handleMarkAllRead = ({n_id}) => {
        Alert.alert('Confirm', 'Do you want to mark all notification as Read ?', [
            {text: 'Cancel', onPress: () => null, style: 'cancel'},
            {text: 'Mark as Read', onPress: () => markAsReadFunc(n_id)}
        ])
    }

    const markAsReadFunc = async (n_id) => {
        try {
            let res = await markAsRead(n_id);
            if(res.stt == 'success'){
                Alert.alert('Successful', res.msg)
            }else{
                Alert.alert('Error', res.msg)
            }
        } catch (error) {
            console.error('error at notification screen marking as read: ', error)
        }
    }

    if(loading){
        return <LoadingScreen/>
    }

    return (
        <View style={styles.container}>
            <Header 
                text={'Notifications'} 
                handleGoBack={handleGoBack} 
                component={
                    <MiniButton
                        content={<FontAwesome6 name="list-check" size={20} color={colors.textColorPri} />}
                        func={() => handleMarkAllRead('all')}
                    /> 
                } 
            />
            {notifications && notifications.length > 0 ? (
                <FlatList
                    data={notifications}
                    renderItem={({item}) => <NotificationCard cardData={item} />}
                    keyExtractor={(item) => item.n_id}
                />
            ) : (
                <NoData/>
            )}
            
        </View>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor,
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    cardWrapper: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingRight: 15,
        borderRadius: 10,
        marginBottom: 2,
    },
    cardLeftWrapper: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardRightWrapper: {
        flex: 10,
    },
    cardTitleTextStyles: {
        fontSize: 12,
        fontFamily: 'ms-semibold',
        color: colors.textColorPri,
    },
    cardDescTextStyles: {
        fontSize: 12,
        fontFamily: 'ms-regular',
        color: colors.textColorPri,
        marginTop: 5,
        textAlign: 'justify',
    },
    cardDateTimeTextStyles: {
        fontSize: 12,
        fontFamily: 'ms-light',
        color: colors.textColorPri,
        marginTop: 5,
    },
})