import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Yup from 'yup';
import AppHeaderText from '../components/AppHeaderText';

import { AppForm, AppFormField, SubmitButton } from '../components/forms'
import Screen from '../components/Screen';


export default function RegisterScreen() {

  const initialValues = {
    fullname: "",
    email: "",
    password: ""
  }

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required().label("Fullname"),
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required().min(4).label("Password")
  })

  return (
    <Screen style = {{padding: 10}}>
      <AppHeaderText style={{marginVertical: 20, alignSelf: "center"}}>Register</AppHeaderText>
      <AppForm 
       initialValues={initialValues}
       onSubmit={(values) => console.log(values)}
       validationSchema={validationSchema}
      >
        <AppFormField 
          autoCorrect={false}
          icon="account"
          name="fullname"  
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
  )
}

const styles = StyleSheet.create({})
