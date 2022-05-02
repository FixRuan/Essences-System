import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { ConvertTypeInSvg, Type } from '../../utils/typeSvg';
import { Command } from './Command';

import {
    Container,
    BashType,
    BashTitle,
    Content,
} from './styles';

type TypeSvg = {
    type: Type,
    size: number,
    color: string,
}

interface BashProps {
    type: Type;
    title: string;
    children: ReactNode;
}

export function Bash({ type, title, children }: BashProps) {
    const theme = useTheme();

    const type_svg: TypeSvg = {
        type,
        size: 24,
        color: theme.colors.white,
    }

    return (
        <Container>
            <BashType type={type}>
                {ConvertTypeInSvg(type_svg)}
            </BashType>

            <BashTitle>{title}</BashTitle>

            <Content>
                <>{children}</>
            </Content>
        </Container>
    );
}