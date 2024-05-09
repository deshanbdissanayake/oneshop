import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerHeader from '../components/app/DrawerHeader'

const HomeScreen = () => {
  return (
    <View>
        <DrawerHeader/>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})