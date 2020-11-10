import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';
import routes from './routes';


const Stack = createStackNavigator(); 

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name={routes.ACCOUNTS} component={AccountScreen} />
        <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
    </Stack.Navigator>
)

const AccountsNav = () => {
    return <StackNavigator />
}
 
export default AccountsNav;