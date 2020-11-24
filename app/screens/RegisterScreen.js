import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import registerApi from "../api/register";
import useAuth from "../auth/useAuth";
import ActivityIndicator from "../components/ActivityIndicator";
import AppHeaderText from "../components/AppHeaderText";
import {
  AppErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Fullname"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
  const regApi = useApi(registerApi.register);

  const auth = useAuth();
  const [error, setError] = useState();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (newUser) => {
    setError(null);
    const response = await regApi.request(newUser);
    if (!response.ok) {
      if (response.data) setError(response.data.error);
      else {
        setError("An unexpected error occured.");
      }
      return;
    }

    setError(null);
    auth.logIn(response.data.token);
  };

  return (
    <>
      <ActivityIndicator visible={regApi.loading} />
      <Screen style={{ padding: 10 }}>
        <AppHeaderText style={{ marginVertical: 20, alignSelf: "center" }}>
          Register
        </AppHeaderText>
        <AppForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppErrorMessage error={error} visible={error} />
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Fullname"
            textContentType="name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            secureTextEntry
            placeholder="Password"
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({});
