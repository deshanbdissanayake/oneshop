import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../assets/colors/colors'

const VendorOrderCard = ({cardData}) => {
  return (
    <View style={styles.cardWrapper}>
      <Text>{cardData.ord_num}</Text>
      <Text>{cardData.cus_name}</Text>
      <Text>{cardData.ord_total}</Text>
      <Text>{cardData.shipping_method}</Text>
      <Text>{cardData.payment_method}</Text>
      <Text>{cardData.ord_status}</Text>
      <Text>{cardData.pay_status}</Text>
      <Text>{cardData.ord_date}</Text>
    </View>
  )
}

export default VendorOrderCard

const styles = StyleSheet.create({
    cardWrapper: {
        backgroundColor: colors.bgColorTer,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 5,
    },
})