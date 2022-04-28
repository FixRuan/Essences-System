import React from 'react';

import { Home } from '../Screens/Home';
import { Market } from '../Screens/Market';

import { TabsRoute } from './Tabs.routes';
import { Phase } from '../Screens/Phase';

import { createStackNavigator } from '@react-navigation/stack';
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
            <Screen name='Phase' component={Phase} />
        </Navigator>
    )
}
