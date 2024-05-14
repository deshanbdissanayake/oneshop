import { Image, ScrollView, StyleSheet, Text, View, Linking, Alert } from 'react-native'
import React, { useEffect, useState, useMemo, useRef } from 'react'
import { colors } from '../../assets/colors/colors'
import Header from '../../components/general/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import { getOrderByOrderId } from '../../assets/data/orders'
import LoadingScreen from '../LoadingScreen'
import BottomSheet from '@gorhom/bottom-sheet';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import MiniButton from '../../components/general/MiniButton'
import Button from '../../components/general/Button'

const OrderSingleScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { ord_id } = route.params;

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => [1, '40%', '75%'], []);

  const handleGoBack = () => {
    navigation.goBack();
  }

  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  const getOrder = async () => {
    try {
      let res = await getOrderByOrderId(ord_id);
      setOrder(res)
    } catch (error) {
      console.error('error at OrderSingleScreen.js -> getOrder: ', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=>{
    getOrder();
  },[])

  const handleOrderHistoryClick = () => {
    bottomSheetRef.current.snapToIndex(1);
    bottomSheetRef.current.collapse();
  }

  const handleCallClick = () => {
    Linking.openURL(`tel:${order.ord_shipping.contact}`);
  }

  const handleOrderConfirmClick = () => {
    Alert.alert('Confirm', 'Are you sure?')
  }
  
  const handlePaymentConfirmClick = () => {
    Alert.alert('Confirm', 'Are you sure?')
  }
  
  const handleDeliveryConfirmClick = () => {
    Alert.alert('Confirm', 'Are you sure?')
  }
  

  if(loading){
    return <LoadingScreen/>
  }

  return (
    <View style={styles.container}>
      <Header
        text={`Order #${order.ord_num}`}
        handleGoBack={handleGoBack}
        component={
            <MiniButton
                content={<AntDesign name="infocirlce" size={24} color={colors.textColorPri} />}
                func={handleOrderHistoryClick}
            />
        }
      />
      <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.proDataCardWrapper}>
            <View style={[{flex: 2}]}></View>
            <View style={[{flex: 3}]}></View>
            <Text style={[styles.headerTextStyles, {flex: 2}]}>Unit Price</Text>
            <Text style={[styles.headerTextStyles, {flex: 1}]}>Qty</Text>
            <Text style={[styles.headerTextStyles, {flex: 2}]}>Total</Text>
          </View>
          {order.ord_items && order.ord_items.map((ord_item, i) => (
            <View style={styles.proDataCardWrapper} key={i}>
              <View style={styles.proImageWrapper}>
                <Image style={styles.proImageStyles} source={{uri : ord_item.pro_image}} />
              </View>
              <View style={styles.proDataWrapper}>
                <Text style={styles.nameTextStyles}>{ord_item.pro_name}</Text>
                <Text style={styles.skuTextStyles}>( SKU - {ord_item.pro_sku} )</Text>
              </View>
              <Text style={styles.priceTextStyles}>{parseFloat(ord_item.unit_price).toFixed(2)}</Text>
              <Text style={styles.qtyTextStyles}>{ord_item.qty}</Text>
              <Text style={styles.totalTextStyles}>{(parseFloat(ord_item.unit_price) * parseInt(ord_item.qty)).toFixed(2)}</Text>
            </View>
          ))}

          <View style={styles.paymentWrapper}>
            <View style={{flex: 1}}></View>
            <View style={{flex: 2}}>
              <View style={styles.rowWrapper}>
                <Text style={styles.payTitleTextStyles}>Item Total</Text>
                <Text style={styles.payAmountTextStyles}>{parseFloat(order.ord_payment.total).toFixed(2)}</Text>
              </View>
              <View style={styles.rowWrapper}>
                <Text style={styles.payTitleTextStyles}>Shipping</Text>
                <Text style={styles.payAmountTextStyles}>{parseFloat(order.ord_payment.shipphing).toFixed(2)}</Text>
              </View>
              <View style={styles.rowWrapper}>
                <Text style={styles.payTitleTextStyles}>Discount</Text>
                <Text style={styles.payAmountTextStyles}>{parseFloat(order.ord_payment.discount).toFixed(2)}</Text>
              </View>
              <View style={styles.rowWrapper}>
                <Text style={[styles.payTitleTextStyles, {fontFamily: 'ms-semibold'}]}>Grand Total</Text>
                <Text style={[styles.payAmountTextStyles, {fontFamily: 'ms-semibold'}]}>{(parseFloat(order.ord_payment.total) + parseFloat(order.ord_payment.shipphing) - parseFloat(order.ord_payment.discount)).toFixed(2)}</Text>
              </View>
            </View>
          </View>

          <View style={styles.otherOderTextWrapper}>
            <Text style={styles.dateTextStyles}>{order.ord_datetime}</Text>
            <Text style={styles.noteTextStyles}>{order.ord_notes}</Text>
            <View style={styles.methodWrapper}>
              <Text style={styles.deliveryMethodTextStyles}>{order.ord_shipping.method}</Text>
              <Text style={styles.paymentMethodTextStyles}>{order.ord_payment.method}</Text>
            </View>
          </View>

          <View style={styles.customerTextWrapper}>
            <View>
              <Text style={styles.cusNameTextStyles}>{order.ord_shipping.name}</Text>
              <Text style={styles.contactTextStyles}>{order.ord_shipping.contact}</Text>
              <Text style={styles.emailTextStyles}>{order.ord_shipping.email}</Text>
            </View>
            <MiniButton
              bgColor={colors.border}
              content={<Ionicons name="call-outline" size={24} color={colors.textColorPri} />}
              func={handleCallClick}
            />
          </View>

          <View style={styles.btnSetWrapper}>
            <Button
              bgColor={colors.bgColorSec}
              bdr={colors.bgColorSec}
              content={<Text style={{color: colors.white, fontFamily: 'ms-regular'}}>Confirm Order</Text>}
              func={handleOrderConfirmClick}
            />
            <Button
              bgColor={colors.bgColorSec}
              bdr={colors.bgColorSec}
              content={<Text style={{color: colors.white, fontFamily: 'ms-regular'}}>Confirm Payment</Text>}
              func={handlePaymentConfirmClick}
            />
            <Button
              bgColor={colors.bgColorSec}
              bdr={colors.bgColorSec}
              content={<Text style={{color: colors.white, fontFamily: 'ms-regular'}}>Confirm Delivery</Text>}
              func={handleDeliveryConfirmClick}
            />
          </View>

        </View>
      </ScrollView>

      {(order && order.ord_history && order.ord_history.length > 0) && (
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          backgroundStyle={{ backgroundColor: colors.bgColorSec }}
          handleIndicatorStyle={{ backgroundColor: colors.textColorSec }}
        >
            <ScrollView contentContainerStyle={styles.bottomSheetContainer}>
                <Text style={styles.bottomSheetTitleTextStyles}>Order History</Text>
                {order.ord_history.map((historyItem, i)=>(
                  <View style={styles.historyItemWrapper} key={i}>
                    <Text style={styles.historyTextStyles}>{historyItem.text}</Text>
                    <Text style={styles.historyDateTextStyles}>{historyItem.cdate}</Text>
                  </View>
                ))}
            </ScrollView>
        </BottomSheet>
       )}

    </View>
  )
}

export default OrderSingleScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    padding: 15,
  },
  contentContainer: {
    flexGrow: 1,
  },
  bottomSheetContainer: {
    flexGrow: 1,
    backgroundColor: colors.bgColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  bottomSheetTitleTextStyles: {
    fontSize: 18,
    fontFamily: 'ms-semibold',
    color: colors.textColorPri,
    textAlign: 'center',
    marginBottom: 10,
  },
  historyItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  historyTextStyles: {
    flex: 2,
    textAlign: 'left',
    fontSize: 14,
    fontFamily: 'ms-regular',
    color: colors.textColorPri,
  },
  historyDateTextStyles: {
    flex: 1,
    textAlign: 'right',
    fontSize: 12,
    fontFamily: 'ms-regular',
    color: colors.textColorPri,
  },
  proDataCardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginBottom: 5,
  },
  proImageWrapper: {
    flex: 2,
  },
  proImageStyles: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  proDataWrapper: {
    flex: 3,
  },
  nameTextStyles: {
    fontSize: 14,
    fontFamily: 'ms-regular',
    color: colors.textColorPri,
  },
  skuTextStyles: {
    fontSize: 10,
    fontFamily: 'ms-light',
    color: colors.textColorPri,
  },
  priceTextStyles: {
    fontSize: 14,
    fontFamily: 'ms-regular',
    color: colors.textColorPri,
    textAlign: 'right',
    flex: 2,
  },
  qtyTextStyles: {
    fontSize: 14,
    fontFamily: 'ms-regular',
    color: colors.textColorPri,
    textAlign: 'right',
    flex: 1,
  },
  totalTextStyles: {
    fontSize: 14,
    fontFamily: 'ms-regular',
    color: colors.textColorPri,
    textAlign: 'right',
    flex: 2,
  },
  headerTextStyles: {
    fontSize: 10,
    fontFamily: 'ms-semibold',
    color: colors.textColorPri,
    textAlign: 'right',
  },
  paymentWrapper: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    borderBottomWidth: 2,
    borderBottomColor: colors.border,
    marginTop: 10,
    paddingVertical: 10,
  },
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  payTitleTextStyles: {
    fontSize: 14,
    fontFamily: 'ms-regular',
    color: colors.textColorPri,
    textAlign: 'right',
  },
  payAmountTextStyles: {
    fontSize: 14,
    fontFamily: 'ms-regular',
    color: colors.textColorPri,
    textAlign: 'right',
  },
  otherOderTextWrapper: {
    marginVertical: 10,
  },
  dateTextStyles: {
    fontSize: 12,
    fontFamily: 'ms-regular',
    color: colors.textColorPri,
    marginBottom: 5,
  },
  noteTextStyles: {
    fontSize: 14,
    fontFamily: 'ms-regular',
    color: colors.textColorPri,
    textAlign: 'justify',
  },
  methodWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  deliveryMethodTextStyles: {
    fontSize: 12,
    fontFamily: 'ms-light',
    color: colors.textColorPri,
    paddingRight: 5,
    marginRight: 5,
    borderRightWidth: 1,
    borderRightColor: colors.border,
  },
  paymentMethodTextStyles: {
    fontSize: 12,
    fontFamily: 'ms-light',
    color: colors.textColorPri,
  },
  customerTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingVertical: 10,
  },
  cusNameTextStyles: {
    fontSize: 14,
    fontFamily: 'ms-regular',
    color: colors.textColorPri,
  },
  contactTextStyles: {
    fontSize: 14,
    fontFamily: 'ms-regular',
    color: colors.textColorPri,
  },
  emailTextStyles: {
    fontSize: 14,
    fontFamily: 'ms-regular',
    color: colors.textColorPri,
  },
  btnSetWrapper: {
    marginTop: 10,
  },
})