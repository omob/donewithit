import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import routes from './routes';

const Stack = createStackNavigator(); 

const StackNavigator = () => (
    <Stack.Navigator 
        mode="modal"
        screenOptions = {{ headerShown: false}}>
        <Stack.Screen 
            name={routes.LISTINGS} 
            component={ListingsScreen} 
        />
        <Stack.Screen 
            name={routes.LISTING_DETAILS} 
            component={ListingDetailsScreen} 
         />
    </Stack.Navigator>
)


const FeedsNavigator = () => {
    return <StackNavigator />
}
 
export default FeedsNavigator;