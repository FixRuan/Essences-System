import React from 'react';

import { useTheme } from 'styled-components/native';
import { ConvertTypeInSvg, Type } from '../../../utils/typeSvg';

import clothier from '../../../assets/clothier.png';


import {
    Container,
    TypeCircle,
    Content,
    ItemTobeSold,
    AboutItem,
    ItemName,
    ItemDescription,
    Price,
    ItemPrice,
    BuyButton,
    ButtonText,
    Card,
} from './styles';

interface MarketCardProps {
    type: Type;
}

export function MarketCard({ type }: MarketCardProps) {
    const theme = useTheme();

    const forrmattedType = {
        type,
        color: theme.colors.white,
        size: 24,
    }

    const priceSvg = {
        type,
        color: theme.colors.type[type],
        size: 20,
    }

    return (
        <Card>
            <Container>
                <TypeCircle type={type}>
                    {ConvertTypeInSvg(forrmattedType)}
                </TypeCircle>

                <Content>
                    <ItemTobeSold source={clothier} />

                    <AboutItem>
                        <ItemName>Clothier</ItemName>
                        <ItemDescription>Perfil Image</ItemDescription>
                    </AboutItem>
                </Content>

                <Price>
                    {ConvertTypeInSvg(priceSvg)}
                    <ItemPrice type={type}>20</ItemPrice>
                </Price>


            </Container>

            <BuyButton type={type}>
                <ButtonText>Buy</ButtonText>
            </BuyButton>
        </Card>
    );
}