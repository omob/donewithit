import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

// import { TextInput } from "react-native-gesture-handler";
import defaultStyles from "../config/styles";


export default function AppTextInput({ icon, width = "100%", onChangeText, ...otherProps }) {
  return (
      <View style={[styles.container, { width: width}]}>
      {icon && 
        <MaterialCommunityIcons
          name={icon}
          color={defaultStyles.colors.medium}
          size={30}
          style={styles.icon}
        ></MaterialCommunityIcons>
      }
      <TextInput 
        placeholderTextColor= {defaultStyles.colors.medium}
        onChangeText={onChangeText} 
        style={[defaultStyles.text]} 
        {...otherProps}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 20,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10
  },
});
