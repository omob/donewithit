import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountsNav from './AccountsNav';
import FeedsNavigator from './FeedsNav';


const Tab = createBottomTabNavigator();

const TabBarIcon = ({size, color }, name) => (
    <MaterialCommunityIcons name={name} size={size} color={color}/>
);

const TabNavigator = () => (
  <Tab.Navigator 
    tabBarOptions = {{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black"
    }}
    >
    <Tab.Screen 
      name="Feeds" 
      component = {FeedsNavigator}
      options = {{
        tabBarIcon: (props) => TabBarIcon(props, "home")
      }}
    />
    <Tab.Screen 
      name="AddListing" 
      component = {ListingEditScreen} 
      options = {{
        tabBarIcon: (props) => TabBarIcon(props, "plus-circle-outline")
      }}  
    />
    <Tab.Screen 
      name="Accounts" 
      component = {AccountsNav} 
      options = {{
        tabBarIcon: (props) => TabBarIcon(props, "account"),
      }}
      />
  </Tab.Navigator>
)


const AppNavigation = () => {
    return <TabNavigator />
}
 
export default AppNavigation;