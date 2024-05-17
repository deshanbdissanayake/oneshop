import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../assets/colors/colors'

const SummaryCard = ({name, value, bgColor}) => {
  return (
    <View style={[styles.cardWrapper, {backgroundColor: bgColor}]}>
        <Text style={styles.cardNameStyles}>{name}</Text>
        <Text style={styles.cardValueStyles}>{value}</Text>
    </View>
  )
}

export default SummaryCard

const styles = StyleSheet.create({
    cardWrapper: {
        marginBottom: 10,
        marginHorizontal: 2,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: Dimensions.get('screen').width/2 - 30,
    },
    cardNameStyles: {
        fontSize: 12,
        fontFamily: 'ms-regular',
        color: colors.white,
        marginBottom: 5,
    },
    cardValueStyles: {
        fontSize: 14,
        fontFamily: 'ms-semibold',
        color: colors.white,
    },
})