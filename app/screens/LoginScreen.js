import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

export default function LoginScreen({ navigation }) {
    return (
        <Screen style={{ padding: 10}}>
            <Image 
                style={styles.logo}
                source={require("../assets/logo-red.png")} />

            <AppForm
                initialValues= {{email: "", password: ""}}
                onSubmit={(values) => navigation.reset({
                    index: 0,
                    routes: [{ name: 'Dashboard' }],
                })}
                validationSchema={validationSchema}
            >
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
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />

                <SubmitButton title="login" />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginVertical: 50
    }
});