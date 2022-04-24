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


            <Cards>
                <PhaseCard />
                <PhaseCard />
                <PhaseCard />
            </Cards>
        </Container>
    );
}