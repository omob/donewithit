import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import AppText from "../AppText";

export default function ListItem({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  IconComponent,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {image && <Image style={styles.image} source={image} />}
          {IconComponent}
          <View style={styles.detailContainer}>
            <AppText 
             numberOfLines={1}
             style={styles.title}>{title}</AppText>
            {
              subTitle 
              && <AppText 
                  numberOfLines={2} style={styles.subTitle}>{subTitle}</AppText>
            }
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            color={colors.medium}
            size={35}
          ></MaterialCommunityIcons>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailContainer: {
    justifyContent: "center",
    marginLeft: 10,
    flex: 1
  },
  subTitle: {
    color: colors.medium,
    fontSize: 18,
  },
  title: {
    fontWeight: "500",
  },
});
