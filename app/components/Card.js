import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native-expo-image-cache";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import colors from "../config/colors";
import AppText from "./AppText";

export default function Card({
  title,
  subTitle,
  imageUrl,
  onPress,
  thumbnailUrl,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          preview={{ uri: thumbnailUrl }}
          style={styles.image}
          tint="light"
          uri={imageUrl}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: "hidden",
    marginBottom: 20,
    width: "100%",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    height: 200,
    width: "100%",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});
