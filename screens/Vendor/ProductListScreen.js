import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/general/Header'
import { colors } from '../../assets/colors/colors'
import MiniButton from '../../components/general/MiniButton'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { getProductsByUserId } from '../../assets/data/products'
import LoadingScreen from '../LoadingScreen'
import VendorProductCard from '../../components/app/VendorProductCard'
import NoData from '../../components/general/NoData'
import { container, flex1 } from '../../assets/commonStyles'

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
            let res = await getProductsByUserId();
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
        <View style={container}>
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
            <View style={flex1}>
                {products && products.length > 0 ? (
                    <FlatList
                        data={products}
                        keyExtractor={(item) => item.pro_id.toString()}
                        renderItem={({item}) => (
                            <VendorProductCard proData={item} handleCardPress={handleCardPress} />
                        )}
                        showsVerticalScrollIndicator={false}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}   
                            />
                        }
                    />
                ) : (
                    <ScrollView 
                        contentContainerStyle={flex1} 
                        showsVerticalScrollIndicator={false}
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