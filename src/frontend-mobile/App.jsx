import React, { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { MenuBitsProvider } from "./src/context/MenuBitsContext";
import AppLoading from "expo-app-loading";
import { Routes } from "./src/routes";
import "./ignoringWarnings";
import useFonts from "./src/hooks/useFonts";

const App = () => {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFontsAndRestoreToken = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFontsAndRestoreToken}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <MenuBitsProvider>
      <Routes />
    </MenuBitsProvider>
  );
};

export default App;
