import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import CategoryPickerItem from "../components/CategoryPickerItem";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import AppFormPicker from "../components/forms/AppFormPicker";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";
import UploadScreen from "../components/UploadScreen";

export default function ListingEditScreen() {
  const [progress, setProgress] = useState(0);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const validationSchema = Yup.object().shape({
    title: Yup.string().min(1).required().label("Title"),
    price: Yup.number().min(1).max(10000).required().label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description"),
    images: Yup.array().min(1, "Please select at least one image"),
  });

  const categories = [
    {
      backgroundColor: "#fc5c65",
      icon: "floor-lamp",
      label: "Furniture",
      value: 1,
    },
    {
      backgroundColor: "#fd9644",
      icon: "car",
      label: "Cars",
      value: 2,
    },
    {
      backgroundColor: "#fed330",
      icon: "camera",
      label: "Cameras",
      value: 3,
    },
    {
      backgroundColor: "#26de81",
      icon: "cards",
      label: "Games",
      value: 4,
    },
    {
      backgroundColor: "#2bcbba",
      icon: "shoe-heel",
      label: "Clothing",
      value: 5,
    },
    {
      backgroundColor: "#45aaf2",
      icon: "basketball",
      label: "Sports",
      value: 6,
    },
    {
      backgroundColor: "#4b7bec",
      icon: "headphones",
      label: "Movies & Music",
      value: 7,
    },
    {
      backgroundColor: "#a55eea",
      icon: "book-open-variant",
      label: "Books",
      value: 8,
    },
    {
      backgroundColor: "#778ca3",
      icon: "application",
      label: "Other",
      value: 9,
    },
  ];

  const initialValues = {
    title: "",
    price: "",
    category: null,
    description: "",
    images: [],
  };

  const location = useLocation();

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setShowUploadModal(true);

    const response = await listingsApi.addListing(
      { location, ...listing },
      (progress) => setProgress(progress)
    );

    if (!response.ok) {
      setShowUploadModal(false);
      return alert("Could not save listing");
    }

    resetForm({});
  };

  return (
    <Screen>
      <UploadScreen
        visible={showUploadModal}
        progress={progress}
        onAnimationFinish={() => setShowUploadModal(false)}
      />
      <ScrollView>
        <View style={{ padding: 20, marginTop: 20, paddingBottom: 100 }}>
          <AppForm
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <AppFormImagePicker name="images" />
            <AppFormField maxLength={255} name="title" placeholder="Title" />
            <AppFormField
              keyboardType="numeric"
              maxLength={8}
              name="price"
              placeholder="Price"
              width={150}
            />
            <AppFormPicker
              items={categories}
              name="category"
              numberOfColumns={3}
              PickerItemComponent={CategoryPickerItem}
              placeholder="Category"
              width={"50%"}
            />
            <AppFormField
              maxLength={255}
              multiline
              name="description"
              numberOfLines={3}
              placeholder="Description"
            />

            <SubmitButton title="Post" />
          </AppForm>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({});
