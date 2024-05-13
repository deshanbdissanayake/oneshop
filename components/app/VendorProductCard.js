import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from '../../assets/colors/colors'

const VendorProductCard = ({ proData, handleCardPress }) => {
  console.log(proData.pro_image)
  return (
    <TouchableOpacity style={styles.cardWrapper} onPress={() => handleCardPress(proData)}>
      <View style={styles.cardImageWrapper}>
        <Image style={styles.cardImageStyles} source={{uri: proData.pro_image}} />
      </View>
      <View style={styles.cardTextWrapper}>
        <View style={styles.cardNameTextWrapper}>
          <Text style={styles.cardNameTextStyles} numberOfLines={1} >{proData.pro_name}</Text>
          <Text style={styles.cardSkuTextStyles} numberOfLines={1} >{proData.pro_sku}</Text>
        </View>
        <View style={styles.cardBottomWrapper}>
          <Text style={styles.cardPriceTextStyles}>{proData.price}</Text>
          <View style={[styles.cardStockStatusTextWrapper, { backgroundColor : proData.stock_status == 'in' ? colors.success : colors.danger }]}>
            <Text style={styles.cardStockStatusTextStyles}>{proData.stock_status == 'in' ? 'In' : 'Out'}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default VendorProductCard

const styles = StyleSheet.create({
    cardWrapper: {
      backgroundColor: colors.bgColorTer,
      paddingHorizontal: 15,
      paddingVertical: 10,
      marginBottom: 10,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cardImageWrapper: {
      flex: 1,
    },
    cardImageStyles: {
      width: 100,
      height: 100,
      resizeMode: 'cover',
      borderRadius: 10,
      backgroundColor: colors.bgColor,
    },
    cardTextWrapper: {
      flex: 2,
      height: 90,
      marginLeft: 5,
      justifyContent: 'space-between',
    },
    cardNameTextWrapper: {

    },
    cardNameTextStyles: {
      fontSize: 14,
      fontFamily: 'ms-semibold',
      color: colors.textColorPri,
    },
    cardSkuTextStyles: {
      fontSize: 12,
      fontFamily: 'ms-regular',
      color: colors.textColorPri,
    },
    cardBottomWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cardPriceTextStyles: {
      fontSize: 15,
      fontFamily: 'ms-regular',
      color: colors.textColorPri,
    },
    cardStockStatusTextWrapper: {
      width: 60,
      justifyContent: 'center',
      borderRadius: 5,
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    cardStockStatusTextStyles: {
      fontSize: 14,
      fontFamily: 'ms-regular',
      color: colors.white,
      textAlign: 'center',
    },
})