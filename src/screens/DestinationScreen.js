import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

export default function DestinationScreen() {
    const [fromText, setFromText] = useState('');
    const [destinationText, setDestinationText] = useState('');

    return (
        <Screen style={ styles.container }>
            <AppTextInput placeholder='From' value={ fromText } onChangeText={ setFromText } />
            <AppTextInput placeholder='Where to?' value={ destinationText } onChangeText={ setDestinationText } />
        </Screen>
    )
}
const styles = StyleSheet.create({
    container: {
        
    }
})