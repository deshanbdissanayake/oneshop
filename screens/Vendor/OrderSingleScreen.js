import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react'
import { colors } from '../../assets/colors/colors'
import Header from '../../components/general/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import { getOrderByOrderId } from '../../assets/data/orders'
import LoadingScreen from '../LoadingScreen'
import BottomSheet from '@gorhom/bottom-sheet';
import { AntDesign } from '@expo/vector-icons';
import MiniButton from '../../components/general/MiniButton'

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
    fontSize: 14,
    fontFamily: 'ms-regular',
    color: colors.textColorPri,
  },
})