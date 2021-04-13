import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';
import DestinationItem from './DestinationItem';

export default function HomeSearch(props) {
    return (
       <View style={ styles.container }>
           {/* Input box */}
            <View style={ styles.inputBox }>
               <AppText style={ styles.inputText }>Where To?</AppText>

               <View style={ styles.timeContainer }>
                   <AntDesign name='clockcircle' size={ 16 } color={ colors.dark } />
                   <AppText style={{ fontSize: 14 }}>Now</AppText>
                   <MaterialIcons name='keyboard-arrow-down' />
               </View>
            </View>

           {/* Previous destination */}
            <DestinationItem title='Spin nightclub' Icon={ () => <AntDesign name='clockcircle' size={ 20 } color={ colors.white } /> } />

           {/* Home destination */}
            <DestinationItem 
                style={{ backgroundColor: colors.blue }} title='Home' Icon={ () => <Entypo name='home' size={ 20 } color={ colors.white } /> } />

       </View>
    )
}
const styles = StyleSheet.create({
    container: {
    },
    inputBox: {
        margin: 10,
        padding: 10,
        backgroundColor: colors.light,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputText: {
        fontSize: 20,
        fontWeight: '600'
    },
    timeContainer: {
        flexDirection: 'row',
        flexBasis: 90,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 50
    }
})