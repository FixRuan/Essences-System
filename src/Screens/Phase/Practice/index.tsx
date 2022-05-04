import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { phaseProps } from '../../../utils/phasesArray';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import { Section } from './Section';
import { Bash } from '../../../components/Bash';
import { Options } from '../../../components/Options';
import { Command } from '../../../components/Bash/Command';
import { ProgressBullet } from '../../../components/ProgressBullet';
import { OptionButton } from '../../../components/Options/OptionButton';

import {
    Container,
    Header,
    Progress,
    Content,
    ButtonGroup,
} from './styles';
import { Button } from '../../../components/Button';



interface Props {
    phase: phaseProps;
}


export function Practice({ phase, }: Props) {
    const theme = useTheme();
    const navigation = useNavigation<any>();

    const bullets = [true, false, false, false, false];
    const [bullet, setBullet] = useState(bullets);

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

            <ScrollView>
                <Content>
                    <Section
                        title={'Bora Codar!'}
                        description={'Nesse desafio você vai desenhar 6 essências com alguns comandos.'}
                        type={phase.essence_type}
                    />

                    <Section
                        title={'Dicas!'}
                        description={'Utilize os botões para criar as essências e use a essência “normal” para quebrar a linha'}
                        type={phase.essence_type}
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

                    <Options type={phase.essence_type}>
                        <OptionButton name='fire()' type='fire' />
                        <OptionButton name='bug()' type='bug' />
                        <OptionButton name='psychic()' type='psychic' />
                        <OptionButton name='newLine()' type='normal' />
                    </Options>

                    <ButtonGroup>
                        <Button
                            type='normal'
                            title='Solução'
                        />

                        <Button
                            type={phase.essence_type}
                            title='Compilar'
                        />
                    </ButtonGroup>
                </Content>
            </ScrollView>
        </Container>
    );
}