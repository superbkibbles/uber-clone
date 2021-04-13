import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from './AppText';

export default function DestinationItem({ title, Icon, style }) {
    return (
        <View style={ styles.container }>
            <View style={ [styles.iconContainer, style] }>
                <Icon />
            </View>
            <AppText style={ styles.text }>{ title }</AppText>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.light
    },
    iconContainer: {
        padding: 20,
        backgroundColor: colors.light,
        borderRadius: 50
    },
    text: {
        marginLeft: 10,
        fontWeight: '500',
        fontSize: 16
    }
})