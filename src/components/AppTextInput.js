import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import colors from '../config/colors';

export default function AppTextInput({ ...otherProps }) {
    return (
        <TextInput style={ styles.input } { ...otherProps } />
    )
}
const styles = StyleSheet.create({
    input: {
        padding: 10,
        backgroundColor: colors.light,
        marginVertical: 5
    }
})