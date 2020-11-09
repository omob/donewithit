import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppText from './AppText';
import Icon from './Icon';

export default function CategoryPickerItem({ item, onPress}) {
   
    return <TouchableOpacity style={styles.container} onPress={onPress}>
        <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
        <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>;
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: "center",
        width: "33%"
    },
    label: {
        marginTop: 5,
        textAlign: "center"
    }
})
