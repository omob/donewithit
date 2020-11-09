import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./app/navigations/AuthNavigation"
import AppNavigation from "./app/navigations/AppNavigation";



export default function App() {
  return  (
    <NavigationContainer>
      {/* <AuthNavigation /> */}
      <AppNavigation />
    </NavigationContainer>
  ) 
}
