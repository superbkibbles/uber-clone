import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppMap from '../components/AppMap';
import HomeSearch from '../components/HomeSearch';

import Screen from '../components/Screen';
import WarningMessage from '../components/WarningMessage';

export default function HomeScreen(props) {
    return (
       <Screen style={ styles.container }>
           <AppMap />
           <WarningMessage />
           <HomeSearch />
       </Screen>
    )
}
const styles = StyleSheet.create({
    container: {
    }
})