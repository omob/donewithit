import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { AppLoading } from "expo";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import OfflineNotice from "./app/components/OfflineNotice";
import AppNavigation from "./app/navigations/AppNavigation";
import AuthNavigation from "./app/navigations/AuthNavigation";
import navigationTheme from "./app/navigations/navigationTheme";
import { navigationRef } from "./app/navigations/rootNavigation";

export default function App() {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </AuthContext.Provider>
  );

  return null;
}
