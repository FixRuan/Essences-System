import React from 'react';
import { useTheme } from 'styled-components/native';

import Fire from '../../../../assets/Essences/fire.svg';

import {
    Container
} from './styles';

export function Essence() {
    const theme = useTheme();

    return (
        <Container>
            <Fire fill={theme.colors.white} width={16} />
        </Container>
    );
}