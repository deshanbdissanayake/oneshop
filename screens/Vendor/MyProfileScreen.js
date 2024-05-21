import { Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Header from '../../components/general/Header'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { container, marginBottom10, textRegular14 } from '../../assets/commonStyles'
import { getProfileData } from '../../assets/data/user'
import LoadingScreen from '../LoadingScreen'

const MyProfileScreen = () => {
    const navigation = useNavigation();

    const [loading, setLoading] = useState(true)
    const [profileData, setProfileData] = useState(null)

    const getData = async () => {
        try {
            let res = await getProfileData();
            setProfileData(res);
        } catch (error) {
            console.error('error at MyProfileScreen.js -> getData')
        } finally {
            setLoading(false)
        }
    }

    useFocusEffect(
        useCallback(()=>{
            getData()
        },[])
    )

    const handleGoBack = () => {
        navigation.goBack();
    }

    if(loading){
        return <LoadingScreen/>
    }

    return (
        <View style={container}>
            <Header text={'My Profile'} handleGoBack={handleGoBack} />
            <View>
                <Text style={[textRegular14]}>{profileData.full_name}</Text>
            </View>
        </View>
    )
}

export default MyProfileScreen
