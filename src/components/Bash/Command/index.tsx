import React from 'react';
import { useTheme } from 'styled-components/native';
import { ConvertTypeInSvg, Type } from '../../../utils/typeSvg';

import {
    Container
} from './styles';

type TypeSvg = {
    type: Type,
    size: number,
    color: string,
}

interface CommandProps {
    type: Type;
}

export function Command({ type }: CommandProps) {
    const theme = useTheme();

    const type_svg = {
        type,
        size: 20,
        color: theme.colors.white,
    }

    return (
        <Container type={type}>
            {ConvertTypeInSvg(type_svg)}
        </Container>
    );
}