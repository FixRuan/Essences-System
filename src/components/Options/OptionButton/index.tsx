import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { ConvertTypeInSvg, Type } from '../../../utils/typeSvg';

import {
    Container,
    Title,
} from './styles';

interface OptionButtonProps extends TouchableOpacityProps {
    type: Type;
    name: string;
}

export function OptionButton({ type, name, ...rest }: OptionButtonProps) {
    const theme = useTheme();

    const type_svg = {
        type,
        size: 18,
        color: theme.colors.white,
    }
    return (
        <Container type={type} activeOpacity={0.8} {...rest}>
            {ConvertTypeInSvg(type_svg)}

            <Title>{name}()</Title>
        </Container>
    );
}