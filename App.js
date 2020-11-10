import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./app/navigations/AuthNavigation"
import AppNavigation from "./app/navigations/AppNavigation";
import navigationTheme from "./app/navigations/navigationTheme";



export default function App() {
  return  (
    <NavigationContainer theme = { navigationTheme }>
      {/* <AuthNavigation /> */}
      <AppNavigation />
    </NavigationContainer>
  ) 
}
