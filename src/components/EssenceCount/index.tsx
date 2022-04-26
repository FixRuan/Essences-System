import React from 'react';
import { useTheme } from 'styled-components/native';

import Fire from '../../../src/assets/Essences/fire.svg';
import { ConvertTypeInSvg, Type } from '../../utils/typeSvg';

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

    const typeSvg = {
        type,
        color: theme.colors.white,
        size: 22,
    }

    return (
        <Container>
            {ConvertTypeInSvg(typeSvg)}
            <EssenceNumber>{essences}</EssenceNumber>
        </Container>
    );
}