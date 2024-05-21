import { StyleSheet, View } from 'react-native'
import React from 'react'
import Subtitle from '../../../components/general/Subtitle'
import { colors } from '../../../assets/colors/colors';
import NoData from '../../../components/general/NoData';
import { btnColorSet, flexWrapper, marginTop10 } from '../../../assets/commonStyles';

const IncomeChart = ({ products }) => {
    return (
        <View style={styles.container}>
            <Subtitle text={'Products Summary'} />
              
        </View>
    )
}

export default IncomeChart

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bgColorTer,
        width: '100%',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
})