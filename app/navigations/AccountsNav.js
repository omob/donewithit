import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from '../screens/AccountScreen';


const Stack = createStackNavigator(); 

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
)

const AccountsNav = () => {
    return <StackNavigator />
}
 
export default AccountsNav;