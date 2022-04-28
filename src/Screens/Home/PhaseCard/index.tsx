import React from 'react';
import { useTheme } from 'styled-components/native';

import { ConvertTypeInSvg } from '../../../utils/typeSvg';
import { Essence } from './Essence';
import { ProgressBar } from './ProgressBar';
import { Type } from '../../../utils/typeSvg';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    EssenceTypeView,
    Header,
    Title,
    Content,
    SubTitle,
    Percentage,
} from './styles';

interface PhaseCardProps extends TouchableOpacityProps {
    essence_type: Type;
    percentage: number;
    name: string;
    description: string;
    type: string;
}

export function PhaseCard({
    essence_type,
    percentage,
    name,
    description,
    type,
    ...rest
}: PhaseCardProps) {

    const theme = useTheme();

    const svg = {
        type: essence_type,
        color: theme.colors.white,
        size: 24,
    }

    const SvgType = ConvertTypeInSvg(svg);

    return (
        <Container {...rest} type={essence_type} activeOpacity={0.96} >
            <EssenceTypeView>
                {SvgType}
            </EssenceTypeView>

            <Header>
                <Title>#{name}</Title>
                <Essence type={essence_type} />
            </Header>

            <Content>
                <SubTitle>{description}</SubTitle>
            </Content>

            <Percentage>{percentage}%</Percentage>
            <ProgressBar type={essence_type} percentage={percentage} />
        </Container>
    );
}