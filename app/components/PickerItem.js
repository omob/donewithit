import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import AppText from './AppText'

export default function PickerItem({item, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
           <AppText style={styles.item}>{item.label}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
    }
});
