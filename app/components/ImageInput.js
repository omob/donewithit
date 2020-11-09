import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function ImageInput({ imageUri, onImageChange }) {

    useEffect(() => {
      requestPermission();
    }, [])

    const requestPermission = async () => {
      const { granted } = await ImagePicker.requestCameraPermissionsAsync();
      if (!granted) alert("We need you to enable permission for this to work");
    };
  
    const handlePress = () => {
        if(!imageUri) selectImage();
        else  Alert.alert(
                "Delete Image", 
                "Are you sure you want to delete", 
                [
                    {
                        text: "Cancel",
                    },
                    { text: "OK", onPress: () => onImageChange(null)}
                ],
            )
    };

    const selectImage = async () => {
      try {
        const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync();
        if (!cancelled) onImageChange(uri);
  
      } catch (error) {
        alert("Error selecting image", error);
        console.log(error)
      }
    }

    return (
        <TouchableWithoutFeedback 
            onPress={handlePress}
            style={[styles.container]}>
            {!imageUri && 
                <MaterialCommunityIcons 
                name="camera"
                size={50}
                style={styles.icon}
                color= {colors.medium}
                />
            }
            {imageUri && <Image source={{ uri: imageUri}} style={styles.image}/>}
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "center",
        width: 120,
        height: 120,
        borderRadius: 20,
        backgroundColor: colors.light,
        overflow: "hidden"
    },
    image: {
        height: "100%",
        width: "100%"
    }
})
