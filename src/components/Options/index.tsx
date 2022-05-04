import React, { ReactNode } from 'react';
import { useTheme } from 'styled-components/native';
import { ConvertTypeInSvg, Type } from '../../utils/typeSvg';
import { OptionButton } from './OptionButton';

import {
    Container,
    SectionType,
    Title,
    ButtonGroup,
} from './styles';

interface OptionsProps {
    type: Type;
    children: ReactNode;
}

export function Options({ type, children }: OptionsProps) {

    const theme = useTheme();

    const type_svg = {
        type,
        size: 24,
        color: theme.colors.type[type],
    }

    return (
        <Container>
            <SectionType>
                {ConvertTypeInSvg(type_svg)}
            </SectionType>

            <Title>Opções</Title>

            <ButtonGroup>
                <>
                    {children}
                </>
            </ButtonGroup>
        </Container>
    );
}