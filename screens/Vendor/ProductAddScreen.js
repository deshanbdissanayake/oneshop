import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../assets/colors/colors'
import Header from '../../components/general/Header'
import { useNavigation } from '@react-navigation/native'
import Input from '../../components/general/Input'
import Button from '../../components/general/Button'
import MultiSelect from '../../components/general/MultiSelect'
import { container, marginBottom10, textLight14, textRegular14 } from '../../assets/commonStyles'
import Switch from '../../components/general/Switch'
import Select from '../../components/general/Select'
import DateTimePicker from '@react-native-community/datetimepicker';

const ProductAddScreen = ({ pro_id = null }) => {
  const navigation = useNavigation();

  const title = !pro_id ? 'Create Product' : 'Edit Product';

  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleSubmitForm = () => {

  }

  const [showDatePicker, setShowDatePicker] = useState(false);

  const [formData, setFormData] = useState({
    pro_name: null,
    pro_sku: null,
    pro_desc: null,
    pro_images: [],
    pro_cat: [],
    pro_tags: [],
    pro_price: null,
    discount: {
      dis_status: false,
      dis_price: null,
      dis_start: null,
      dis_end: null,
    },
    stock_status: 'in'
  });

  const handleDate = (selectedDate) => {
    setFormData((prevData) => ({ ...prevData, discount: {...prevData.discount, dis_start: selectedDate}}))
    setShowDatePicker(false)
  }

  const handleCategories = (selectedCategories) => {
    setFormData((prevData) => ({...prevData, pro_cat: selectedCategories}))
  }

  const handleTags = (selectedTags) => {
    setFormData((prevData) => ({...prevData, pro_tags: selectedTags}))
  }

  const handleDiscountStatus = (res)  => {
    setFormData((prevData) => ({
      ...prevData,
      discount: {
        ...prevData.discount,
        dis_status: res,
        dis_price: !res ? null : prevData.discount.dis_price,
        dis_start: !res ? null : prevData.discount.dis_start,
        dis_end: !res ? null : prevData.discount.dis_end
      },
    }));
  };

  // Function to format date as yyyy-mm-dd
  const formatDate = (date) => {
    return new Date(date).toISOString().split('T')[0];
  };

  return (
    <View style={container}>
      <Header text={title} handleGoBack={handleGoBack} />
      <ScrollView 
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.formStyles}>
          <View style={[marginBottom10]}>
            <Text style={styles.labelTextStyles}>Product Name</Text>
            <Input
              keyboardType={'default'}
              value={formData.pro_name ?? ''}
              onChangeText={(text) => setFormData((prevData) => ({ ...prevData, pro_name: text }))}
              placeholder={'Enter Product Name'}
            />
          </View>
          <View style={[marginBottom10]}>
            <Text style={styles.labelTextStyles}>Product SKU</Text>
            <Input
              keyboardType={'default'}
              value={formData.pro_sku ?? ''}
              onChangeText={(text) => setFormData((prevData) => ({ ...prevData, pro_sku: text }))}
              placeholder={'Enter Product SKU'}
            />
          </View>
          <View style={[marginBottom10]}>
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
          <View style={[marginBottom10]}>
            <Text style={styles.labelTextStyles}>Product Price</Text>
            <Input
              keyboardType={'numeric'}
              value={formData.pro_price ?? ''}
              onChangeText={(text) => setFormData((prevData) => ({ ...prevData, pro_price: text }))}
              placeholder={'Enter Product Price'}
            />
          </View>

          <View style={[marginBottom10]}>
            <Text style={styles.labelTextStyles}>Discount</Text>
            <Switch
              switchStatus={formData.discount.dis_status}
              setSwitchStatus={(res) => handleDiscountStatus(res)}
            />
          </View>

          {formData.discount.dis_status && (
            <>
              <View style={[marginBottom10]}>
                <Text style={styles.labelTextStyles}>Discount Price</Text>
                <Input
                  keyboardType={'numeric'}
                  value={formData.discount.dis_price ?? ''}
                  onChangeText={(text) => setFormData((prevData) => ({ ...prevData, discount: { ...prevData.discount, dis_price: text} }))}
                  placeholder={'Enter Discount Price'}
                />
              </View>
              <View style={[marginBottom10]}>
                <Text style={styles.labelTextStyles}>Discount Start</Text>
                <Button
                  content={
                    <Text 
                      style={[textLight14]}>
                        {!formData.discount.dis_start ? 'Select Discount Start Date' : formatDate(formData.discount.dis_start)}
                    </Text>
                  }
                  func={() => setShowDatePicker(true)}
                  bdr={colors.border}
                  itemPosition={'flex-start'}
                />
              </View>
              <View style={[marginBottom10]}>
                <Text style={styles.labelTextStyles}>Discount End</Text>
                <Button
                  content={
                    <Text 
                      style={[textLight14]}>
                        {!formData.discount.dis_end ? 'Select Discount End Date' : formatDate(formData.discount.dis_end)}
                    </Text>
                  }
                  func={() => setShowDatePicker(true)}
                  bdr={colors.border}
                  itemPosition={'flex-start'}
                />
              </View>

              {showDatePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={!formData.discount.dis_start ? new Date() : formData.discount.dis_start}
                  mode={'date'}
                  onChange={(event, selectedDate) => handleDate(selectedDate)}
                />
              )}
            </>
          )}

          <View style={[marginBottom10]}>
            <Text style={styles.labelTextStyles}>Product Categories</Text>
            <MultiSelect
              value={formData.pro_cat}
              options={[{value: '1', label: 'IT'}, {value: '2', label: 'Consumer Goods'}, {value: '3', label: 'Beauty'}]}
              onSelect={handleCategories}
            />
          </View>

          <View style={[marginBottom10]}>
            <Text style={styles.labelTextStyles}>Product Tags</Text>
            <MultiSelect
              value={formData.pro_tags}
              options={[{value: '1', label: 'Tag 1'}, {value: '2', label: 'Tag 2'}, {value: '3', label: 'Tag 3'}]}
              onSelect={handleTags}
            />
          </View>

          <View style={[marginBottom10]}>
            <Text style={styles.labelTextStyles}>Stock Status</Text>
            <Select
              value={formData.pro_tags}
              options={[{value: 'in', label: 'Stock In'}, {value: 'out', label: 'Stock Out'}]}
              onSelect={(res) => setFormData((prevData) => ({...prevData, stock_status: res}))}
            />
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
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  labelTextStyles: {
    marginBottom: 5,
    marginLeft: 2,
    fontFamily: 'ms-light',
    fontSize: 12,
    color: colors.textColorPri,
  },
})