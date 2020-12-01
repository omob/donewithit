import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Image } from "react-native-expo-image-cache";
import { ScrollView } from "react-native-gesture-handler";
import AppText from "../components/AppText";
import ContactSeller from "../components/ContactSeller";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";

export default function ListingDetailsScreen({
  route: {
    params: { item: listing },
  },
}) {
  const { image, price, title } = listing;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <ScrollView>
        <Screen>
          <Image
            style={styles.image}
            preview={{ uri: listing.images[0].thumbnailUrl }}
            uri={listing.images[0].url}
            tint="light"
          />
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.price}>${price} </AppText>

            <View style={styles.userContainer}>
              <ListItem
                image={require("../assets/mosh.jpg")}
                title="Mosh Hamedani"
                subTitle="5 Listings"
              ></ListItem>
              <ContactSeller listing={listing} />
            </View>
          </View>
        </Screen>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  detailsContainer: {
    padding: 20,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});
