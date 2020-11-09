import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createStackNavigator(); 

const StackNavigator = () => (
    <Stack.Navigator mode="modal">
        <Stack.Screen 
            name="Listings" 
            component={ListingsScreen} 
            options = {{
                headerShown: false  
            }}
        />
        <Stack.Screen 
            name="ListingDetails" 
            component={ListingDetailsScreen} 
         />
    </Stack.Navigator>
)


const FeedsNavigator = () => {
    return <StackNavigator />
}
 
export default FeedsNavigator;