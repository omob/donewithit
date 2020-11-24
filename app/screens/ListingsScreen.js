import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import listingsApi from "../api/listings";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigations/routes";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

const ListingsScreen = ({ navigation }) => {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  );

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        {error && !loading && (
          <>
            <AppText style={{ textAlign: "center" }}>
              Couldn't load listings
            </AppText>
            <AppButton text="Retry" onPress={loadListings} />
          </>
        )}

        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() =>
                navigation.navigate(routes.LISTING_DETAILS, { item })
              }
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});
export default ListingsScreen;
