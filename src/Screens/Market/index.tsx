import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components/native';

import { Market as MarketView } from '.././../components/Market';
import { EssenceCount } from '../../components/EssenceCount';

import { MarketCard } from './MarketCard';
import { useNavigation } from '@react-navigation/native';
import pattern from '../../assets/pattern.png';

import { user } from '../../utils/user';

import {
    Container,
    Header,
    UserInfo,
    UserName,
    Content,
    PatternImage,
    Cards,
} from './styles';


export function Market() {
    const theme = useTheme();
    const navigation = useNavigation<any>();

    function handleGoHome() {
        navigation.navigate('Home');
    }

    return (
        <Container>
            <StatusBar style='light' backgroundColor={theme.colors.black} translucent={false} />


            <Header>
                <MarketView active={true} onPress={handleGoHome} />

                <UserInfo>
                    <PatternImage source={pattern} />

                    <UserName>{user.name}</UserName>
                    <EssenceCount type={user.userType} essences={10} />
                </UserInfo>
            </Header>

            <Content>
                <Cards>
                    <MarketCard type='psychic' />
                    <MarketCard type='fire' />
                    <MarketCard type='poison' />
                    <MarketCard type='water' />
                </Cards>
            </Content>
        </Container>
    );
}