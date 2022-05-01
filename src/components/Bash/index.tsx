import React from 'react';
import { ConvertTypeInSvg, Type } from '../../utils/typeSvg';

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
    type_svg: TypeSvg;
}

export function Bash({ type_svg }: BashProps) {
    return (
        <Container>
            <BashType>
                {ConvertTypeInSvg(type_svg)}
            </BashType>

            <BashTitle>Objetivo do código</BashTitle>

            <Content>

            </Content>
        </Container>
    );
}