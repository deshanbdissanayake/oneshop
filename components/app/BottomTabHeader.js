import React from 'react';
import { Text, View, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

import { colors } from '../../assets/colors/colors';
import MiniButton from '../general/MiniButton';

const BottomTabHeader = ({text = null}) => {
  const navigation = useNavigation();

  const openDrawer = () => {
    //console.log('drawer')
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const handleNotificationClick = () => {
    navigation.navigate('Notification Screen')
  }

  return (
    <View>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
          {/* Logo */}
          {/*<Image source={require('../../assets/images/app/logo.png')} style={styles.logo} />*/}
          {/* Name */}
          <Text style={styles.name}>{text ? text : 'Home'}</Text>
        </View>
        <View style={styles.rightContainer}>
          {/* User icon */}
          <MiniButton
            content={<Ionicons name="notifications" size={24} color={colors.textColorSec} />}
            func={handleNotificationClick}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.bgColorSec,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  name: {
    fontSize: 24,
    color: colors.textColorSec,
    fontFamily: 'ms-bold',
    textAlign: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default BottomTabHeader;