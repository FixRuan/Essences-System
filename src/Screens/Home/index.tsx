import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components/native';

import { Market } from '../../components/Market';
import { EssenceCount } from '../../components/EssenceCount';
import { PhaseCard } from './PhaseCard';

import {
    Container,
    Header,
    UserInfo,
    UserName,
    Cards,
} from './styles';

export function Home() {
    const theme = useTheme();

    return (
        <Container>
            <StatusBar style='light' backgroundColor={theme.colors.black} translucent={false} />


            <Header>
                <Market active={true} />

                <UserInfo>
                    <UserName>Ruan Pablo</UserName>
                    <EssenceCount essences={10} />
                </UserInfo>
            </Header>


            <Cards showsVerticalScrollIndicator={false}>
                <PhaseCard type='fire' percentage={100} />
                <PhaseCard type='dragon' percentage={80} />
                <PhaseCard type='psychic' percentage={60} />
                <PhaseCard type='grass' percentage={56} />
                <PhaseCard type='steel' percentage={38} />
                <PhaseCard type='rock' percentage={18} />
            </Cards>
        </Container>
    );
}