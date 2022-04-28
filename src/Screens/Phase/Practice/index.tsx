import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components/native';

import { ProgressBullet } from '../../../components/ProgressBullet';
import { phaseProps } from '../../../utils/phasesArray';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ConvertTypeInSvg } from '../../../utils/typeSvg';

import {
    Container,
    Header,
    Progress,
    Content,
    Section,
    SectionType,
    SectionTitle,
    SectionDescription,
} from './styles';


interface Props {
    phase: phaseProps;
}


export function Practice({ phase, }: Props) {
    const theme = useTheme();
    const navigation = useNavigation<any>();

    const bullets = [true, false, false, false, false];
    const [bullet, setBullet] = useState(bullets);

    const SectionTypeSvg = {
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
                <Section>
                    <SectionType type={phase.essence_type}>
                        {ConvertTypeInSvg(SectionTypeSvg)}
                    </SectionType>

                    <SectionTitle>Bora Codar!</SectionTitle>
                    <SectionDescription>Nesse desafio você vai desenhar 6 essências com alguns comandos.</SectionDescription>
                </Section>
            </Content>



        </Container>
    );
}