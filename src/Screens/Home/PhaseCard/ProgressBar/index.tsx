import React from 'react';
import { Type } from '../../../../utils/typeSvg';

import {
    Container,
    Progress,
} from './styles';

interface ProgressBarProps {
    type: Type;
    percentage: number;
}

export function ProgressBar({ type, percentage }: ProgressBarProps) {
    return (
        <Container>
            <Progress progress={percentage} type={type} />
        </Container>
    );
}