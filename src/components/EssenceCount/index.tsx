import React from 'react';
import { useTheme } from 'styled-components/native';

import Fire from '../../../src/assets/Essences/fire.svg';
import { Type } from '../../utils/typeSvg';

import {
    Container,
    EssenceNumber,
} from './styles';

interface EssenceCountProps {
    essences: number;
    type?: Type;
}

export function EssenceCount({ essences, type }: EssenceCountProps) {
    const theme = useTheme();

    return (
        <Container>
            <Fire fill={theme.colors.white} />
            <EssenceNumber>{essences}</EssenceNumber>
        </Container>
    );
}