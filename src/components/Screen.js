import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default ({ children, style }) => {
    return (
        <SafeAreaView style={ [styles.screen, style] }>
            <View style={ [styles.view, style] }>
                { children }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    },
    view: {
        flex: 1
    }
})