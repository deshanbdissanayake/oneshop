import { Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/general/Header'
import { useNavigation } from '@react-navigation/native'
import { container } from '../../assets/commonStyles'

const MyProfileScreen = () => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }
    return (
        <View style={container}>
            <Header text={'My Profile'} handleGoBack={handleGoBack} />
            <Text>MyProfileScreen</Text>
        </View>
    )
}

export default MyProfileScreen
