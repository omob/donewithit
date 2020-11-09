import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppText from '../AppText'

export default function AppErrorMessage({error, visible}) {

    if (!visible || !error) return null;

    return (
        <View>
           <AppText style={{ color: 'red'}}> { error } </AppText>
        </View>
    )
}

const styles = StyleSheet.create({})
