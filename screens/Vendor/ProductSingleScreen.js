import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../assets/colors/colors'
import Header from '../../components/general/Header'
import { useNavigation, useRoute } from '@react-navigation/native'

const ProductSingleScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const { proData } = route.params;

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Header
                text={proData.pro_name}
                handleGoBack={handleGoBack}
            />
            <Text>ProductSingleScreen</Text>
        </View>
    )
}

export default ProductSingleScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor,
        padding: 15,
    },
})