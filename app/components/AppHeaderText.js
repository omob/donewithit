import React from "react";
import { StyleSheet, Text } from "react-native";


import defaultStyles from "../config/styles";

function AppHeaderText({ children, style }) {
  return <Text style={[defaultStyles.heading, style]}>{children}</Text>;
}

const styles = StyleSheet.create({

});
export default AppHeaderText;
