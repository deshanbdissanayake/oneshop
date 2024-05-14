import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../assets/colors/colors'
import Header from '../../components/general/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import { getAllCategories } from '../../assets/data/categories'
import { getAllTags } from '../../assets/data/tags'
import LoadingScreen from '../LoadingScreen'

const ProductSingleScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const { proData } = route.params;

    const handleGoBack = () => {
        navigation.goBack();
    }

    const [loading, setLoading] = useState(true);
    const [cats, setCats] = useState(null);
    const [tags, setTags] = useState(null);

    const getData = async () => {
        try {
            let cats = await getAllCategories();
            let tags = await getAllTags();
    
            let proCatData = proData.categories.map(catId => cats.find(cat => cat.cat_id === catId));
            let proTagData = proData.tags.map(tagId => tags.find(tag => tag.tag_id === tagId));

            setCats(proCatData);
            setTags(proTagData);
        } catch (error) {
            console.error('Error at ProductSingleScreen getData: ', error);
        } finally {
            setLoading(false);
        }
    };
      

    useEffect(() => {
        getData();
    },[])

    if(loading){
        return <LoadingScreen/>
    }

    return (
        <View style={styles.container}>
            <Header
                text={'Single Product'}
                handleGoBack={handleGoBack}
            />
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.imageWrapper} > 
                    <Image style={styles.mainImageStyles} source={{uri: proData.pro_images.img_1}} />
                    <View style={styles.subImagesWrapper}>
                        <Image style={styles.subImageStyles} source={{uri: proData.pro_images.img_2}} />
                        <Image style={styles.subImageStyles} source={{uri: proData.pro_images.img_3}} />
                        <Image style={styles.subImageStyles} source={{uri: proData.pro_images.img_4}} />
                    </View>
                </View>
                <View style={styles.productDetailsWrapper}>
                    <Text style={styles.nameTextStyles}>{proData.pro_name}</Text>
                    <View style={styles.stockSkuWrapper}>
                        <Text style={styles.skuTextStyles}>{proData.pro_sku}</Text>
                        <View style={[styles.stockStatusWrapper]}>
                            <Text style={[styles.stockStatusTextStyles, { color : proData.stock_status == 'in' ? colors.success : colors.danger }]}>({proData.stock_status == 'in' ? 'In Stock' : 'Out of Stock'})</Text>
                        </View>
                    </View>
                    <View style={styles.priceWrapper}>
                        {proData.discount ? (
                            <>
                                <Text style={styles.priceTextStyles}>LKR </Text>
                                <Text style={styles.discountPriceTextStyles}>{proData.discount.dis_price}</Text>
                                <Text style={[styles.priceTextStyles, {textDecorationLine: 'line-through'}]}>{proData.price}</Text>
                            </>
                        ) : (
                            <Text style={styles.priceTextStyles}>LKR {proData.price}</Text>
                        )}
                    </View>
                    {proData.discount &&
                        <View style={styles.discountDateWrapper}>
                            <Text style={styles.discountDateTextStyles}>{`(Discount From ${proData.discount.dis_start} To ${proData.discount.dis_end})`}</Text>
                        </View>
                    }
                    <View style={styles.categoriesWrapper}>
                        {(cats && cats.length > 0) && cats.map((cat, index)=>(
                            <View style={styles.categoryWrapper} key={index}>
                                <Text style={styles.categoryTextStyles}>{cat.cat_name}</Text>
                            </View>
                        ))}
                    </View>
                    <Text style={styles.descTextStyles}>{proData.pro_desc}</Text>
                    <View style={styles.tagsWrapper}>
                        {(tags && tags.length > 0) && tags.map((tag, index)=>(
                            <View style={styles.tagWrapper} key={index}>
                                <Text style={styles.tagTextStyles}>{tag.tag_name}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
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
    contentContainer: {
        flexGrow: 1,
    },
    imageWrapper: {
         
    },
    mainImageStyles: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
        marginBottom: 7,
        borderRadius: 10,
    },
    subImagesWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subImageStyles: {
        width: '32%',
        height: 100,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    productDetailsWrapper: {
        marginTop: 15,
    },
    nameTextStyles: {
        fontSize: 18,
        fontFamily: 'ms-semibold',
        color: colors.textColorPri,
    },
    skuTextStyles: {
        fontSize: 14,
        fontFamily: 'ms-regular',
        color: colors.textColorPri,
    },
    priceWrapper: {
        flexDirection: 'row',
        marginTop: 5,
    },
    discountPriceTextStyles: {
        fontSize: 20,
        fontFamily: 'ms-regular',
        color: colors.textColorPri,
        marginRight: 10,
    },
    priceTextStyles: {
        fontSize: 20,
        fontFamily: 'ms-regular',
        color: colors.textColorPri,
    },
    categoriesWrapper: {
        flexDirection: 'row',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingBottom: 10,
    },
    categoryWrapper: {
        marginRight: 5,
        paddingRight: 5,
        borderRightWidth: 1,
        borderRightColor: colors.border,
    },
    categoryTextStyles: {
        fontSize: 14,
        fontFamily: 'ms-regular',
        color: colors.textColorPri,
    },
    descTextStyles: {
        fontSize: 14,
        fontFamily: 'ms-regular',
        color: colors.textColorPri,
        marginBottom: 15,
        textAlign: 'justify',
    },
    tagsWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tagWrapper: {
        backgroundColor: colors.bgColorTer,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        marginRight: 5,
    },
    tagTextStyles: {
        fontSize: 12,
        fontFamily: 'ms-light',
        color: colors.textColorPri,
        textAlign: 'center',
    },
    stockSkuWrapper: {
        flexDirection: 'row',
    },
    stockStatusWrapper: {
        borderRadius:5,
        marginLeft: 5,
    },
    stockStatusTextStyles: {
        fontSize: 14,
        fontFamily: 'ms-regular',
        textAlign: 'center',
    },
    discountDateWrapper: {
        marginBottom: 15,
    },
    discountDateTextStyles: {
        fontSize: 12,
        fontFamily: 'ms-regular',
        color: colors.textColorPri,
    },
})