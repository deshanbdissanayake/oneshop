import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { colors } from '../../assets/colors/colors'
import Header from '../../components/general/Header'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getOrdersByUserId } from '../../assets/data/orders'
import LoadingScreen from '../LoadingScreen'
import NoData from '../../components/general/NoData'
import VendorOrderCard from '../../components/app/VendorOrderCard'

const OrderListScreen = () => {
  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      let res = await getOrdersByUserId();
      setOrders(res);
    } catch (error) {
      console.error('error at OrderListScreen.js -> getOrders', error)
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      getOrders();
    },[])
  )

  const onRefresh = () => {
    setRefreshing(true);
    getOrders();
  }

  const handleOrderClick = (ord_id) => {
    navigation.navigate('Order Single Screen', { ord_id })
  }

  if(loading){
    return <LoadingScreen/>
  }

  return (
    <View style={styles.container}>
      <Header
        text={'My Orders'}
      />
      <View style={styles.contentContaienr}>
        {orders && orders.length > 0 ? (
          <FlatList
            data={orders}
            keyExtractor={(item) => item.ord_id.toString()}
            renderItem={({item}) => <VendorOrderCard cardData={item} handleOrderClick={handleOrderClick} />}
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
            contentContainerStyle={styles.noDataWrapper} 
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh} 
              />
            }
          >
            <NoData text={'No Orders Yet!'} />
          </ScrollView>
        )}
      </View>
    </View>
  )
}

export default OrderListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    padding: 15,
  },
  contentContaienr: {
    flex: 1,
  },
  noDataWrapper: {
    flexGrow: 1,
  },
})