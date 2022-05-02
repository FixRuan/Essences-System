import React from 'react';
import { Type } from '../../utils/typeSvg';

import {
    Container
} from './styles';

interface ProgressBulletProps {
    active?: boolean;
    type: Type;
}

export function ProgressBullet({ active, type }: ProgressBulletProps) {
    return (
        <Container active={active} type={type} />
    );
}