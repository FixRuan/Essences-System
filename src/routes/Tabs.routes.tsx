import React from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { Home } from '../Screens/Home';
import { Perfil } from '../Screens/Perfil';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const { Navigator, Screen } = createBottomTabNavigator();


export function TabsRoute() {

    const theme = useTheme();

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 78,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    backgroundColor: theme.colors.black,
                },
                tabBarActiveTintColor: theme.colors.white,
                tabBarInactiveTintColor: theme.colors.gray,
            }}
        >
            <Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: (({ size, color }) => <Feather name='home' size={size} color={color} />)
                }}
            />

            <Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: (({ size, color }) => <Feather name='user' size={size} color={color} />)
                }}
            />
        </Navigator>
    )
}