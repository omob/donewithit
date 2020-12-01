import * as Notification from "expo-notifications";
import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import messagesApi from "../api/messages";
import { AppForm, AppFormField, SubmitButton } from "./forms";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().label("Message").min(4),
});

export default function ContactSeller({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    try {
      const response = await messagesApi.contactSeller(message, listing.id);

      if (!response.ok) {
        console.log("Error", response);
        return Alert.alert("Error", "Could not send message to the seller.");
      }

      resetForm({});

      Notification.scheduleNotificationAsync({
        content: {
          title: "Awesome",
          body: "Your message was sent to the seller.",
        },
        trigger: null,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <AppForm
        initialValues={{ message: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField name="message" placeholder="Message..." />
        <SubmitButton title="Contact Seller" />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({});
