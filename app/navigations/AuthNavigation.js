import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';


const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator screenOptions = {{
  }}>
    <Stack.Screen name="Welcome" component={WelcomeScreen} options = {{
      headerShown: false
    }}/>
    <Stack.Screen name="Login" component={LoginScreen} 
      options=  {{ headerTitle: false }}
    />
    <Stack.Screen name="Register" component={RegisterScreen} 
      options=  {{ headerTitle: false }}
    />
  </Stack.Navigator>
)

const AuthNavigation = () => {
    return <StackNavigator />
}
 
export default AuthNavigation;