import React from 'react';
import { useTheme } from 'styled-components/native';

import { Type } from '../../../../utils/typeSvg';
import { ConvertTypeInSvg } from '../../../../utils/typeSvg';

import {
    Container
} from './styles';

interface EssenceProps {
    type: Type;
}

export function Essence({ type }: EssenceProps) {
    const theme = useTheme();
    const svg = {
        type,
        color: theme.colors.white,
        size: 16,
    }

    const SvgType = ConvertTypeInSvg(svg);

    return (
        <Container type={type}>
            {SvgType}
        </Container>
    );
}