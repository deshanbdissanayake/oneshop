import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import DrawerHeader from '../../components/app/DrawerHeader'
import { colors } from '../../assets/colors/colors'
import BottomTabHeader from '../../components/app/BottomTabHeader'
import { useAppContext } from '../../context/AppContext'
import OrderSummary from './Home/OrderSummary'
import ProductSummary from './Home/ProductSummary'
import { getOrderSummary } from '../../assets/data/dash'
import { useFocusEffect } from '@react-navigation/native'
import { alertWrapper } from '../../assets/commonStyles'
import CustomModal from '../../components/general/CustomModal'
import Select from '../../components/general/Select'
import LoadingScreen from '../LoadingScreen'

const HomeScreen = () => {
  const { navType } = useAppContext();

  
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState(null);

  const orderSummaryFilterOptions = [
      {label: 'Today', value: 'today'},
      {label: 'This Week', value: 'this_week'},
      {label: 'This Month', value: 'this_month'},
  ];

  const [orderSummaryFilter, setOrderSummaryFilter] = useState('today');
  const [showOrderSummaryFilter, setShowOrderSummaryFilter] = useState(false);

  const handleOrderSummaryFilter = (filter) => {
    setOrderSummaryFilter(filter);
    setShowOrderSummaryFilter(false);
  }

  const getOrdersData = async () => {
      try {
          let res = await getOrderSummary()
          setOrders(res);
      } catch (error) {
          console.error('Error at OrderSummary.js -> getOrdersData')
      } finally {
          setLoading(false);
      }
  }

  useFocusEffect(
      useCallback(() => {
          getOrdersData()
      },[])
  )

  if(loading){
    return <LoadingScreen />
  }
  
  return (
    <View style={styles.container}>
      {navType == 'drawer' ? (
        <DrawerHeader text={'Home'} />
      ) : (
        <BottomTabHeader text={'Home'} />
      )}
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
          <OrderSummary orders={orders} filter={orderSummaryFilter} setShowOrderSummaryFilter={setShowOrderSummaryFilter} />
          <ProductSummary/>
      </ScrollView>

      {showOrderSummaryFilter && (
          <View style={[alertWrapper]}>
              <CustomModal
                  title={'Select Filter'}
                  content={
                      <Select
                          options={orderSummaryFilterOptions}
                          placeholder={'Select Filter'}
                          onSelect={(text)=>handleOrderSummaryFilter(text)}
                      />
                  }
                  okButtonText={'Cancel'}
                  pressOk={()=>setShowOrderSummaryFilter(false)}
                  pressClose={() => setShowOrderSummaryFilter(false)}
              />
          </View>
      )}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  contentContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
})