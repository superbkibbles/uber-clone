import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DestinationScreen from './src/screens/DestinationScreen';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <DestinationScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
