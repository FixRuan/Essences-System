import React from 'react';
import { useTheme } from 'styled-components/native';
import { ConvertTypeInSvg, Type } from '../../../utils/typeSvg';

import {
    Container,
    TypeCircle,
    PhaseComplete,
    TotalEssences,
    PhasesInfo,
} from './styles';

interface PerfilCardProps {
    type: Type;
    totalEssences: number;
    phasesCompleted: number;
}

export function PerfilCard({ type, phasesCompleted, totalEssences }: PerfilCardProps) {

    const theme = useTheme();

    const typeSvg = {
        type,
        size: 24,
        color: theme.colors.type[type],
    }

    return (
        <Container type={type}>
            <TypeCircle>
                {ConvertTypeInSvg(typeSvg)}
            </TypeCircle>

            <PhasesInfo>
                <PhaseComplete>Fases completadas: {phasesCompleted}</PhaseComplete>
                <TotalEssences>Total de essências: {totalEssences}</TotalEssences>
            </PhasesInfo>
        </Container>
    );
}