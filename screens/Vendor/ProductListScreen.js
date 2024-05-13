import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/general/Header'
import { colors } from '../../assets/colors/colors'
import MiniButton from '../../components/general/MiniButton'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { getMyProducts } from '../../assets/data/products'
import LoadingScreen from '../LoadingScreen'
import VendorProductCard from '../../components/app/VendorProductCard'
import NoData from '../../components/general/NoData'

const ProductListScreen = () => {
    const navigation = useNavigation();

    const handleAddProduct = () => {
        navigation.navigate('Product Add Screen')
    }

    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [products, getProducts] = useState(null);

    const getProductsFunc = async () => {
        try {
            let res = await getMyProducts();
            getProducts(res);
        } catch (error) {
            console.error('error at ProductListScreen->getProducts: ', error)
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    }

    useEffect(()=>{
        getProductsFunc();
    },[])

    const handleCardPress = async (proData) => {
        navigation.navigate('Product Single Screen', { proData } )
    }

    const onRefresh = () => {
        setRefreshing(true);
        getProductsFunc();
    }

    if(loading){
        return <LoadingScreen/>
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
            <View style={styles.contentContainer}>
                {products && products.length > 0 ? (
                    <FlatList
                        data={products}
                        keyExtractor={(item) => item.pro_id.toString()}
                        renderItem={({item}) => (
                            <VendorProductCard proData={item} handleCardPress={handleCardPress} />
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                ) : (
                    <ScrollView 
                        contentContainerStyle={styles.contentContainer} 
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}   
                            />
                        }
                    >
                        <NoData/>
                    </ScrollView>
                )}
            </View>
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
    contentContainer: {
        flex: 1,
    },
})