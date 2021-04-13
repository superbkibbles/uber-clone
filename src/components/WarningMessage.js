import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

export default function WarningMessage() {
    return (
       <View style={ styles.container }>
           <AppText style={ styles.title }>Travel only if necessary</AppText>
           <AppText style={ styles.subTitle }>Help flattern the curve if you must travel please exsico caution for your safety and the safety of out socity</AppText>
           <AppText style={ styles.learnMore }>Learn more</AppText>
       </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        padding: 15,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    title: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    subTitle: {
        color: colors.lightBlue,
        fontSize: 15,
        marginBottom: 10
    },
    learnMore: {
        color: colors.white,
        fontSize: 15,
        fontWeight: 'bold'
    }
})