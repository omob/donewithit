import React from "react";
import { Image, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons
            name="close"
            color="white"
            size={35}
          ></MaterialCommunityIcons>
        </View>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            color="white"
            size={35}
          />
        </View>
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
  },
  iconContainer: {
    flex: 1,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    top: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
