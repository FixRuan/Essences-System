import React from 'react';
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
    type_svg: TypeSvg;
}

export function Section({ title, description, type, type_svg }: SectionProps) {
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