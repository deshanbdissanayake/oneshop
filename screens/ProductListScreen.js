import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/general/Header'
import { colors } from '../assets/colors/colors'
import MiniButton from '../components/general/MiniButton'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const ProductListScreen = () => {
    const navigation = useNavigation();

    const handleAddProduct = () => {
        navigation.navigate('Product Add Screen')
    }

    return (
        <View style={styles.container}>
            <Header 
                text={'My Products'} 
                component={
                    <MiniButton
                        bgColor={colors.bgColorTer}
                        content={<Entypo name="plus" size={24} color={colors.textColorPri} />}
                        func={handleAddProduct}
                    />
                }
            />
            <Text>ProductListScreen</Text>
        </View>
    )
}

export default ProductListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor,
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
})