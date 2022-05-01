import React from 'react';
import { View } from 'react-native';
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
    type_svg: TypeSvg;
    type: Type;
}

export function Bash({ type_svg, type }: BashProps) {
    return (
        <Container>
            <BashType type={type}>
                {ConvertTypeInSvg(type_svg)}
            </BashType>

            <BashTitle>Objetivo do código</BashTitle>

            <Content>
                <Command type='fire' />
                <Command type='fire' />
                <Command type='fire' />
                <View style={{ width: 60, height: 32 }} />
                <Command type='fire' />
                <Command type='fire' />
                <Command type='fire' />
            </Content>
        </Container>
    );
}