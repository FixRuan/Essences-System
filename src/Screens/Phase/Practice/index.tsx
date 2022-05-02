import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components/native';

import { ProgressBullet } from '../../../components/ProgressBullet';
import { phaseProps } from '../../../utils/phasesArray';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Section } from './Section';

import {
    Container,
    Header,
    Progress,
    Content,
} from './styles';
import { Bash } from '../../../components/Bash';
import { Command } from '../../../components/Bash/Command';


interface Props {
    phase: phaseProps;
}


export function Practice({ phase, }: Props) {
    const theme = useTheme();
    const navigation = useNavigation<any>();

    const bullets = [true, false, false, false, false];
    const [bullet, setBullet] = useState(bullets);

    const TypeSvg = {
        type: phase.essence_type,
        size: 24,
        color: theme.colors.white
    }

    function handleGoHome() {
        navigation.navigate('Home');
    }

    return (
        <Container>
            <StatusBar backgroundColor={theme.colors.black} style={'light'} translucent={false} />

            <Header>
                <TouchableOpacity onPress={handleGoHome}>
                    <Feather name='arrow-left' size={36} color={theme.colors.secondary} />
                </TouchableOpacity>

                <Progress>
                    {bullet.map((item, index) =>
                        <ProgressBullet
                            type={phase.essence_type}
                            key={index}
                            active={item}
                        />)
                    }
                </Progress>
            </Header>

            <Content>
                <Section
                    title={'Bora Codar!'}
                    description={'Nesse desafio você vai desenhar 6 essências com alguns comandos.'}
                    type={phase.essence_type}
                    type_svg={TypeSvg}
                />

                <Section
                    title={'Dicas!'}
                    description={'Utilize os botões para criar as essências e use a essência “normal” para quebrar a linha'}
                    type={phase.essence_type}
                    type_svg={TypeSvg}
                />

                <Bash type={phase.essence_type} title={'Objetivo do código'}>
                    <Command type='ground' />
                    <Command type='fire' />
                    <Command type='fire' />
                    <Command type='fire' />
                    <View style={{ width: 20, height: 32 }} />
                    <Command type='fire' />
                    <Command type='fire' />
                    <Command type='fire' />
                    <Command type='ground' />
                </Bash>

                <Bash type={phase.essence_type} title={'Código atual'}>
                    <Command type='ground' />
                </Bash>
            </Content>
        </Container>
    );
}