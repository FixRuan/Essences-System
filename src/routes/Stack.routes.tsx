import React from 'react';

import { Home } from '../Screens/Home';
import { Market } from '../Screens/Market';

import { createStackNavigator } from '@react-navigation/stack';
import { TabsRoute } from './Tabs.routes';
const { Navigator, Screen } = createStackNavigator();



export function StackRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="HomeScreen" component={TabsRoute} />
            <Screen name="Market" component={Market} />
        </Navigator>
    )
}
