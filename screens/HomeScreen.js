import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerHeader from '../components/app/DrawerHeader'
import Header from '../components/general/Header'
import { colors } from '../assets/colors/colors'
import BottomTabHeader from '../components/app/BottomTabHeader'
import { useAppContext } from '../context/AppContext'

const HomeScreen = () => {
  const { navType } = useAppContext();
  
  return (
    <View style={styles.container}>
      {navType == 'drawer' ? (
        <DrawerHeader text={'Home'} />
      ) : (
        <BottomTabHeader text={'Home'} />
      )}
      <View style={styles.contentContainer}>
          <Text>HomeScreen</Text>
      </View>
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