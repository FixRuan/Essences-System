import React from 'react';
import { useTheme } from 'styled-components/native';
import { ConvertTypeInSvg, Type } from '../../utils/typeSvg';

import {
    Container,
    Circle,
    Title,
} from './styles';

interface ButtonProps {
    title: string;
    type: Type;
}


export function Button({ title, type }: ButtonProps) {
    const theme = useTheme();

    const type_svg = {
        type,
        size: 24,
        color: theme.colors.white,
    }

    return (
        <Container>
            <Circle type={type} activeOpacity={0.8}>
                {ConvertTypeInSvg(type_svg)}
            </Circle>

            <Title>{title}</Title>
        </Container>
    );
}