import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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
        flex: 1,
    },
    cardNameStyles: {
        color: colors.textLight,
        fontSize: 12,
        fontWeight: '300',
    },
    cardValueStyles: {
        color: colors.textLight,
        fontSize: 14,
        fontWeight: '400',
    },
})