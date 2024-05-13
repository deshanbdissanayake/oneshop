import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/general/Header'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../assets/colors/colors'

const MyProfileScreen = () => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <Header text={'My Profile'} handleGoBack={handleGoBack} />
            <Text>MyProfileScreen</Text>
        </View>
    )
}

export default MyProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor,
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
})