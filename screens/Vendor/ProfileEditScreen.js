import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { container } from '../../assets/commonStyles'
import Header from '../../components/general/Header'
import { useNavigation } from '@react-navigation/native'

const ProfileEditScreen = () => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <View style={[container]}>
            <Header text={'Edit My Profile'} handleGoBack={handleGoBack} />
            <Text>ProfileEditScreen</Text>
        </View>
    )
}

export default ProfileEditScreen

const styles = StyleSheet.create({})