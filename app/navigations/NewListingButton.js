import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../config/colors';


export default function NewListingButton({ onPress }) {

    return (
        <TouchableOpacity style = {styles.container} onPress={onPress}>
            <View >
                <MaterialCommunityIcons name="plus-circle" size={50} color={colors.white}/>
            </View>
        </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 40,
        borderColor: colors.white,
        borderWidth: 10,
        bottom: 30,
        height: 80,
        justifyContent: "center",
        width: 80,
    }
})