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
import { useNavigation } from '@react-navigation/native';

export function Home() {
    const theme = useTheme();
    const navigation = useNavigation<any>();

    function handleGoMarket() {
        navigation.navigate('Market');
    }

    return (
        <Container>
            <StatusBar style='light' backgroundColor={theme.colors.black} translucent={false} />


            <Header>
                <Market active={false} onPress={handleGoMarket} />

                <UserInfo>
                    <UserName>Ruan Pablo</UserName>
                    <EssenceCount type='steel' essences={10} />
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