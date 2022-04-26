import React from 'react';

import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/Global/theme/theme';

import { Home } from './src/Screens/Home';
import { Market } from './src/Screens/Market';
import { Perfil } from './src/Screens/Perfil';
import { TabsRoute } from './src/routes/Tabs.routes';
import { StackRoutes } from './src/routes/Stack.routes';

let customFonts = {
  'Inika-Regular': require('./src/assets/Fonts/Inika-Regular.ttf'),
  'Inika-Bold': require('./src/assets/Fonts/Inika-Bold.ttf'),
  'Alef-Regular': require('./src/assets/Fonts/Alef-Regular.ttf'),
}

export default function App() {

  const [fontsLoaded] = useFonts(customFonts);

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}