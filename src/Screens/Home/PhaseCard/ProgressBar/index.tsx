import React from 'react';

import {
    Container,
    Progress,
} from './styles';

export function ProgressBar() {
    return (
        <Container>
            <Progress progress={100} />
        </Container>
    );
}