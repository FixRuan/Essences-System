import React from 'react';
import { useTheme } from 'styled-components/native';
import { ConvertTypeInSvg, Type } from '../../../../utils/typeSvg';

import {
    Container,
    SectionType,
    SectionTitle,
    SectionDescription,
} from './styles';

type TypeSvg = {
    type: Type,
    size: number,
    color: string,
}

interface SectionProps {
    title: string;
    description: string;
    type: Type;
}

export function Section({ title, description, type }: SectionProps) {
    const theme = useTheme();

    const type_svg: TypeSvg = {
        type,
        size: 24,
        color: theme.colors.white
    }
    return (
        <Container>
            <SectionType type={type}>
                {ConvertTypeInSvg(type_svg)}
            </SectionType>

            <SectionTitle>{title}</SectionTitle>
            <SectionDescription>
                {description}
            </SectionDescription>
        </Container>
    );
}