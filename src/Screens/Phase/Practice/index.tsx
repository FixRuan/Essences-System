import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components/native';

import { ProgressBullet } from '../../../components/ProgressBullet';
import { phaseProps } from '../../../utils/phasesArray';

import {
    Container,
    Header,
    Progress,
} from './styles';

interface Props {
    phase: phaseProps;
}


export function Practice({ phase, }: Props) {
    const theme = useTheme();

    const bullets = [true, false, false, false, false];
    const [bullet, setBullet] = useState(bullets);

    return (
        <Container>
            <StatusBar backgroundColor={theme.colors.black} style={'light'} translucent={false} />

            <Header>
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


        </Container>
    );
}