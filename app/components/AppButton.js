import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function AppButton({ text, onPress, color = "primary", style }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
    >
      <AppText style={styles.text}>{text}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    marginVertical: 10,
    padding: 15,
    width: "100%",
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default AppButton;
