import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../assets/colors/colors'
import Header from '../../components/general/Header'
import { useNavigation } from '@react-navigation/native'
import Input from '../../components/general/Input'
import Button from '../../components/general/Button'
import MultiSelect from '../../components/general/MultiSelect'

const ProductAddScreen = ({ pro_id = null }) => {
  const navigation = useNavigation();

  const title = !pro_id ? 'Create Product' : 'Edit Product';

  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleSubmitForm = () => {

  }

  const [formData, setFormData] = useState({
    pro_name: null,
    pro_desc: null,
    pro_sku: null,
    pro_price: null,
    pro_sale_price: null,
    pro_cat: [],
  });
  
  return (
    <View style={styles.container}>
      <Header text={title} handleGoBack={handleGoBack} />
      <ScrollView 
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formStyles}>
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
            <Text style={styles.labelTextStyles}>Product Description</Text>
            <Input
              keyboardType={'default'}
              value={formData.pro_desc ?? ''}
              onChangeText={(text) => setFormData((prevData) => ({ ...prevData, pro_desc: text }))}
              placeholder={'Enter Product Description'}
              multiline={true}
              textArea={true}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.labelTextStyles}>Product SKU</Text>
            <Input
              keyboardType={'default'}
              value={formData.pro_sku ?? ''}
              onChangeText={(text) => setFormData((prevData) => ({ ...prevData, pro_sku: text }))}
              placeholder={'Enter Product SKU'}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.labelTextStyles}>Product Price</Text>
            <Input
              keyboardType={'numeric'}
              value={formData.pro_price ?? ''}
              onChangeText={(text) => setFormData((prevData) => ({ ...prevData, pro_price: text }))}
              placeholder={'Enter Product Price'}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.labelTextStyles}>Product Sale Price</Text>
            <Input
              keyboardType={'numeric'}
              value={formData.pro_sale_price ?? ''}
              onChangeText={(text) => setFormData((prevData) => ({ ...prevData, pro_sale_price: text }))}
              placeholder={'Enter Product Sale Price'}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.labelTextStyles}>Product Category</Text>
            
          </View>
        </View>
        <View style={styles.btnStyles}>
          <Button
            bgColor={colors.bgColorSec}
            content={<Text style={{ color: colors.textColorSec, fontFamily: 'ms-regular'}}>Submit</Text>}
            func={handleSubmitForm}
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
    justifyContent: 'space-between',
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