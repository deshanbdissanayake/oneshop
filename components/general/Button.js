import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import React from 'react'
import { colors } from '../../assets/colors/colors'

const Button = ({bgColor, content, func, bdr='', loading = false, loaderIconColor = colors.textColorPri,  paddingStt = true, btnDisabled = false, errorMessage = "Error", itemPosition = 'center'}) => {

  //to show an alert to the user why button is disabled
  const showAlert = (msg) => {
    Alert.alert(
      "",
      msg,
      [
        {
          text: "OK",
        }
      ]
    )
  }

  return (
    <>
      {loading ? (
        <View style={[styles.buttonWrapper, {backgroundColor: colors.border}]}>
          <View style={styles.buttonText}>
            <ActivityIndicator size={24} color={loaderIconColor} />
          </View>
        </View>
      ): (
        (!btnDisabled) ? (
          <>
            <TouchableOpacity
              style={[
                styles.buttonWrapper,
                {alignItems: itemPosition},
                { backgroundColor: bgColor, borderWidth: bdr === '' ? 0 : 1, borderColor: bdr === '' ? 'transparent' : bdr }
              ]}
              onPress={func}
            >
              <View style={paddingStt ? styles.buttonText : null}>
                {content}
              </View>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              style={[
                styles.buttonWrapper,
                {alignItems: itemPosition},
                { backgroundColor: bgColor, opacity: 0.6, borderWidth: bdr === '' ? 0 : 1, borderColor: bdr === '' ? 'transparent' : bdr }
              ]}
              onPress={() => showAlert(errorMessage)}
            >
              <View style={paddingStt ? styles.buttonText : null}>
                {content}
              </View>
            </TouchableOpacity>
          </>
        )
      )}
    </>
  )
}

export default Button

const styles = StyleSheet.create({
    buttonWrapper : {
        justifyContent: 'center',
        marginVertical: 5,
        borderRadius: 10,
    },
    shadow : {
        shadowColor: colors.bgColorSec,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    buttonText : {
        paddingVertical: 15,
        paddingHorizontal: 20,
    }
})