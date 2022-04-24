import React from 'react';
import { useTheme } from 'styled-components/native';

import Fire from '../../../assets/Essences/fire.svg';
import { Essence } from './Essence';
import { ProgressBar } from './ProgressBar';

import {
    Container,
    EssenceTypeView,
    Header,
    Title,
    Content,
    SubTitle,
    Percentage,
} from './styles';

export function PhaseCard() {

    const theme = useTheme();

    return (
        <Container>
            <EssenceTypeView>
                <Fire fill={theme.colors.white} />
            </EssenceTypeView>

            <Header>
                <Title>#Introdução</Title>
                <Essence />
            </Header>

            <Content>
                <SubTitle>Entenderemos o básico de T.I e como tudo se conecta com programação.</SubTitle>
            </Content>

            <Percentage>100%</Percentage>
            <ProgressBar />
        </Container>
    );
}