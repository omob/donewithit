import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import Constants from "expo-constants";
import colors from "../config/colors";

export default function OfflineNotice() {
  const netInfo = useNetInfo();
  //   console.log(netInfo);

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: "center",
    position: "absolute",
    top: Constants.statusBarHeight,
    width: "100%",
    zIndex: 1,
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
  },
});
