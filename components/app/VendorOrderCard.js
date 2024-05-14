import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../assets/colors/colors'

const VendorOrderCard = ({cardData, handleOrderClick}) => {
    
    const sttFunc = (stt) => {
        let sttBgColor = colors.info , sttText = 'Default';

        if(stt == 'pending'){
            sttBgColor = colors.warning
            sttText = 'Pending'
        }else if(stt == 'processing'){
            sttBgColor = colors.info
            sttText = 'Processing'
        }else if(stt == 'delivering'){
            sttBgColor = colors.success
            sttText = 'Delivering'
        }else if(stt == 'completed'){
            sttBgColor = colors.success
            sttText = 'Completed'
        }

        return (
            <View style={[styles.statusTextWrapper, { backgroundColor: sttBgColor}]}>
                <Text style={styles.statusTextStyles}>{sttText}</Text>
            </View>
        )
    }

    return (
        <TouchableOpacity style={styles.cardWrapper} onPress={() => handleOrderClick(cardData.ord_id)}>
            <View style={styles.ordWrapper}>
                <Text style={styles.ordNumTextStyles}>#{cardData.ord_num}</Text>
                <Text style={styles.ordDateTextStyles}>{cardData.ord_date}</Text>
            </View>

            <Text style={styles.ordTotalTextStyles}>LKR {cardData.ord_total}</Text>
            <Text style={styles.cusNameTextStyles}>{cardData.cus_name}</Text>

            <View style={styles.methodWrapper}>
                <Text style={styles.shippingMethodTextStyles}>{cardData.shipping_method}</Text>
                <Text style={styles.payMethodTextStyles}>{cardData.payment_method}</Text>
            </View>

            <View style={styles.statusWrapper}>
                <View>
                    <Text style={styles.statusTitleTextStyles}>Order Status</Text>
                    {sttFunc(cardData.ord_status)}
                </View>
                <View>
                    <Text style={[styles.statusTitleTextStyles, {textAlign: 'right', marginRight: 1,}]}>Pay Status</Text>
                    {sttFunc(cardData.pay_status)}
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default VendorOrderCard

const styles = StyleSheet.create({
    cardWrapper: {
        backgroundColor: colors.bgColorTer,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: colors.border,
    },
    ordWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ordNumTextStyles: {
        fontSize: 14,
        fontFamily: 'ms-semibold',
        color: colors.textColorPri,
    },
    ordDateTextStyles: {
        fontSize: 12,
        fontFamily: 'ms-light',
        color: colors.textColorPri,
    },
    ordTotalTextStyles: {
        fontSize: 20,
        fontFamily: 'ms-regular',
        color: colors.textColorPri,
    },
    cusNameTextStyles: {
        fontSize: 14,
        fontFamily: 'ms-regular',
        color: colors.textColorPri,
    },
    methodWrapper: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: colors.border,
        paddingTop: 5,
        marginTop: 5,
    },
    shippingMethodTextStyles: {
        fontSize: 12,
        fontFamily: 'ms-regular',
        color: colors.textColorPri,
        borderRightWidth: 1,
        borderColor: colors.border,
        paddingRight: 5,
        marginRight: 5,
    },
    payMethodTextStyles: {
        fontSize: 12,
        fontFamily: 'ms-regular',
        color: colors.textColorPri,
    },
    statusWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    statusTitleTextStyles: {
        fontSize: 10,
        fontFamily: 'ms-regular',
        color: colors.textColorPri,
        marginLeft: 1,
        marginBottom: 2,
    },
    statusTextWrapper:{
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    statusTextStyles: {
        fontSize: 12,
        fontFamily: 'ms-light',
        color: colors.white,
    },
})