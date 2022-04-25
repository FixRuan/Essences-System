import React from 'react';
import { useTheme } from 'styled-components/native';

import { ConvertTypeInSvg } from '../../../utils/typeSvg';
import { Essence } from './Essence';
import { ProgressBar } from './ProgressBar';
import { Type } from '../../../utils/typeSvg';

import {
    Container,
    EssenceTypeView,
    Header,
    Title,
    Content,
    SubTitle,
    Percentage,
} from './styles';

interface PhaseCardProps {
    type: Type;
    percentage: number;
}

export function PhaseCard({ type, percentage }: PhaseCardProps) {

    const theme = useTheme();

    const svg = {
        type,
        color: theme.colors.white,
        size: 24,
    }

    const SvgType = ConvertTypeInSvg(svg);

    return (
        <Container type={type} >
            <EssenceTypeView>
                {SvgType}
            </EssenceTypeView>

            <Header>
                <Title>#Introdução</Title>
                <Essence type={type} />
            </Header>

            <Content>
                <SubTitle>Entenderemos o básico de T.I e como tudo se conecta com programação.</SubTitle>
            </Content>

            <Percentage>{percentage}%</Percentage>
            <ProgressBar type={type} percentage={percentage} />
        </Container>
    );
}