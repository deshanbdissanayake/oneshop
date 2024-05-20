import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import Header from '../../components/general/Header'
import { colors } from '../../assets/colors/colors'
import MiniButton from '../../components/general/MiniButton'
import { Entypo, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { getProductsByUserId } from '../../assets/data/products'
import LoadingScreen from '../LoadingScreen'
import VendorProductCard from '../../components/app/VendorProductCard'
import NoData from '../../components/general/NoData'
import { bottomSheetContainer, bottomSheetContentWrapper, bottomSheetTitleTextStyles, container, flex1, flexRow, justifyCenter, marginBottom10, marginBottom5, marginHorizontal2, marginLeft10, marginLeft5, marginVertical10, marginVertical5, paddingBottom10, paddingBottom5, paddingVertical10, textRegular12, textRegular14 } from '../../assets/commonStyles'
import Input from '../../components/general/Input'

const ProductListScreen = () => {
    const navigation = useNavigation();

    const handleAddProduct = () => {
        navigation.navigate('Product Add Screen')
    }

    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [products, getProducts] = useState(null);

    const [showFilter, setShowFilter] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [filter, setFilter] = useState('all');

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

    const handleFilterClick = () => {
        setShowFilter((prevData) => !prevData)
    }

    
    const FilterButton = ({ label, value }) => (
        <TouchableOpacity 
            onPress={() => setFilter(value)} 
            style={[
                marginHorizontal2, 
                paddingVertical10, 
                justifyCenter, 
                styles.filterBtnWrapper, 
                { backgroundColor: filter === value ? colors.bgSilver : colors.bgColorTer }
            ]}
        >
            <Text style={[textRegular12]}>{label}</Text>
        </TouchableOpacity>
    );

    if(loading){
        return <LoadingScreen/>
    }

    return (
        <View style={container}>
            <Header 
                text={'My Products'} 
                component={
                    <View style={[flexRow]}>
                        <View>
                            <MiniButton
                                bgColor={colors.bgColorTer}
                                content={<Ionicons name="filter" size={24} color={colors.textColorPri} />}
                                func={handleFilterClick}
                            />
                        </View>
                        <View style={[marginLeft10]}>    
                            <MiniButton
                                bgColor={colors.bgColorTer}
                                content={<Entypo name="plus" size={28} color={colors.textColorPri} />}
                                func={handleAddProduct}
                            />
                        </View>
                    </View>
                }
            />
            <View style={flex1}>
                {showFilter && (
                    <View style={[marginBottom10, paddingBottom5, {borderBottomWidth: 1, borderBottomColor: colors.border}]}>
                        <View style={[marginVertical5, flexRow, marginHorizontal2]}>
                            <View style={[justifyCenter, {flex: 10}]}>
                                <Input
                                    keyboardType={'default'}
                                    value={searchText}
                                    onChangeText={(text) => setSearchText(text)}
                                    placeholder={'Enter Product Name/ Code'}
                                />
                            </View>
                            <View style={[marginLeft10]}>
                                <MiniButton
                                    content={<Ionicons name="search" size={24} color={colors.textColorPri} />}
                                    inputStyles={true}
                                />
                            </View>
                        </View>
                        <View style={[marginVertical5, flexRow, marginHorizontal2]}>
                            <FilterButton label="All" value="all" />
                            <FilterButton label="In Stock" value="in" />
                            <FilterButton label="Out of Stock" value="out" />
                        </View>
                    </View>
                )}
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

const styles = StyleSheet.create({
    filterBtnWrapper: {
        flex: 1, 
        borderRadius: 5, 
        borderWidth: 0.5, 
        borderColor: colors.border
    },
})