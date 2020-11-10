import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { color } from "react-native-reanimated";
import colors from "../config/colors";
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountsNav from './AccountsNav';
import FeedsNavigator from './FeedsNav';
import NewListingButton from "./NewListingButton";
import routes from "./routes";


const Tab = createBottomTabNavigator();

const TabBarIcon = ({size, color }, name) => (
    <MaterialCommunityIcons name={name} size={size} color={color}/>
);

const TabNavigator = () => (
  <Tab.Navigator 
    tabBarOptions = {{
      activeBackgroundColor: colors.white,
      activeTintColor: colors.primary,
      inactiveBackgroundColor: colors.white,
      inactiveTintColor: colors.black
    }}
    >
    <Tab.Screen 
      name={routes.FEEDS} 
      component = {FeedsNavigator}
      options = {{
        tabBarIcon: (props) => TabBarIcon(props, "home")
      }}
    />
    <Tab.Screen 
      name={routes.LISTING_EDIT} 
      component = {ListingEditScreen} 
      options = {({ navigation }) => ({
        tabBarButton: () => 
          <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)}/>,
        tabBarIcon: ({ color, size }) => 
          <MaterialCommunityIcons 
            name="plus-circle" 
            color={color}
            size={size}  />
      })}  
    />
    <Tab.Screen 
      name={routes.ACCOUNTS} 
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