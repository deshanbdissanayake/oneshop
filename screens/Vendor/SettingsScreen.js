import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../assets/colors/colors'
import Header from '../../components/general/Header'
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { container } from '../../assets/commonStyles';

const RowItem = ({icon, text, func}) => {
  return (
    <TouchableOpacity style={styles.tableRowStyles} onPress={func} >
      {icon}
      <Text style={styles.tableDataTextStyles}>{text}</Text>
    </TouchableOpacity>
  );
}

const SettingsScreen = () => {

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleProfileClick = () => {
    navigation.navigate('My Profile Screen')
  }

  const handleLogoutClick = () => {
    console.log('logout')
  }

  return (
    <View style={container}>
      <Header text={'Settings'} /> 
      <View style={styles.tableStyles}>
        <RowItem 
          func={handleProfileClick}
          icon={<Feather name="user" size={24} color={colors.textColorPri} />} 
          text={'Profile'} 
        />
        <RowItem 
          func={handleLogoutClick}
          icon={<MaterialIcons name="logout" size={24} color={colors.textColorPri} />} 
          text={'Logout'} 
        />
      </View>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  tableStyles: {
    borderTopWidth: 1,
    borderColor: colors.border,
    marginTop: 15,
  },
  tableRowStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  tableDataTextStyles: {
    fontFamily: 'ms-regular',
    marginLeft: 15,
    fontSize: 18,
    color: colors.textColorPri,
  },

})