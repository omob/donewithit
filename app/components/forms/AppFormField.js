import React from "react";
import { useFormikContext } from "formik";
import { StyleSheet } from "react-native";

import AppTextInput from "../AppTextInput";
import AppErrorMessage from "./AppErrorMessage";

export default function AppFormField({ name, width, ...otherProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    values,
    touched,
    errors,
  } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
