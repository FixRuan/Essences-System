import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Practice } from './Practice';

import {
    Container
} from './styles';

export function Phase() {
    const theme = useTheme();

    const route = useRoute();
    const { phase } = route.params as any;


    function switchPhaseType() {
        switch (phase.type) {
            case 'practice':
                return <Practice phase={phase} />;
        }
    }


    return (
        <Container>
            <StatusBar backgroundColor={theme.colors.black} style={'light'} translucent={false} />
            {switchPhaseType()}
        </Container>
    );
}