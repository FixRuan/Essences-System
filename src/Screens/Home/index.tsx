import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components/native';

import { Market } from '../../components/Market';
import { EssenceCount } from '../../components/EssenceCount';
import { PhaseCard } from './PhaseCard';
import { useNavigation } from '@react-navigation/native';

import { phases, phaseProps } from '../../utils/phasesArray';

import { user } from '../../utils/user';

import {
    Container,
    Header,
    UserInfo,
    UserName,
    Cards,
} from './styles';

export function Home() {
    const theme = useTheme();
    const navigation = useNavigation<any>();

    function handleGoMarket() {
        navigation.navigate('Market');
    }

    function handleGoPhase(phase: phaseProps) {
        navigation.navigate('Phase', { phase });
    }

    return (
        <Container>
            <StatusBar style='light' backgroundColor={theme.colors.black} translucent={false} />


            <Header>
                <Market active={false} onPress={handleGoMarket} />

                <UserInfo>
                    <UserName>{user.name}</UserName>
                    <EssenceCount type={user.userType} essences={10} />
                </UserInfo>
            </Header>


            <Cards showsVerticalScrollIndicator={false}>
                {phases.map(phase =>
                    <PhaseCard
                        key={phase.id}
                        essence_type={phase.essence_type}
                        percentage={60}
                        name={phase.name}
                        description={phase.description}
                        type={phase.type}
                        onPress={() => handleGoPhase(phase)}
                    />
                )}

            </Cards>
        </Container>
    );
}