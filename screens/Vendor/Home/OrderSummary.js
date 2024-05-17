import { StyleSheet, View } from 'react-native'
import React from 'react'
import Subtitle from '../../../components/general/Subtitle'
import { colors } from '../../../assets/colors/colors';
import NoData from '../../../components/general/NoData';
import MiniButton from '../../../components/general/MiniButton';
import { Feather } from '@expo/vector-icons';

const OrderSummary = ({ orders, filter, setShowOrderSummaryFilter }) => {
    return (
        <View style={styles.container}>
            <Subtitle 
                text={'Order Summary'} 
                component={
                    <MiniButton
                        content={<Feather name="more-vertical" size={18} color={colors.textColorPri} />}
                        func={() => setShowOrderSummaryFilter(true)}
                    />
                }
            />
            <View style={styles.cardsWrapper}>
                { orders && orders.length > 0 ? (
                    ''
                ) : (
                    <NoData text={'No Orders Yet!'} />
                ) }
            </View>
        </View>
    )
}

export default OrderSummary

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bgColorTer,
        width: '100%',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    cardsWrapper: {
        marginTop: 15,
    },
})