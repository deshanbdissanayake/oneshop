import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../assets/colors/colors'
import Header from '../components/general/Header'
import { useNavigation } from '@react-navigation/native'
import Input from '../components/general/Input'

const ProductAddScreen = ({ pro_id = null }) => {
  const navigation = useNavigation();

  const title = !pro_id ? 'Create Product' : 'Edit Product';

  const handleGoBack = () => {
    navigation.goBack();
  }

  const [formData, setFormData] = useState({
    pro_name: null,
  });
  
  return (
    <View style={styles.container}>
      <Header text={title} handleGoBack={handleGoBack} />
      <ScrollView 
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formGroup}>
          <Text style={styles.labelTextStyles}>Product Name</Text>
          <Input
            keyboardType={'default'}
            value={formData.pro_name ?? ''}
            onChangeText={(text) => setFormData((prevData) => ({ ...prevData, pro_name: text }))}
            placeholder={'Enter Product Name'}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.labelTextStyles}>Product Name</Text>
          <Input
            keyboardType={'default'}
            value={formData.pro_name ?? ''}
            onChangeText={(text) => setFormData((prevData) => ({ ...prevData, pro_name: text }))}
            placeholder={'Enter Product Name'}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.labelTextStyles}>Product Name</Text>
          <Input
            keyboardType={'default'}
            value={formData.pro_name ?? ''}
            onChangeText={(text) => setFormData((prevData) => ({ ...prevData, pro_name: text }))}
            placeholder={'Enter Product Name'}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default ProductAddScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  contentContainer: {
    flexGrow: 1,
  },
  formGroup: {
    marginBottom: 15,
  },
  labelTextStyles: {
    marginBottom: 5,
    marginLeft: 2,
    fontFamily: 'ms-light',
    fontSize: 12,
    color: colors.textColorPri,
  },
})