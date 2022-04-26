import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import MarketImageBlackPng from '../../assets/Market/market_black.png';
import MarketImageWhitePng from '../../assets/Market/market_white.png';

import {
    Container,
    MarketImage,
    Circle,
} from './styles';

interface MarketProps extends TouchableOpacityProps {
    active?: boolean;
}

export function Market({ active = false, ...rest }: MarketProps) {

    function handleMarketImage(active: boolean) {
        return active ? MarketImageBlackPng : MarketImageWhitePng;
    }

    const marketImage = handleMarketImage(active);



    return (
        <Container {...rest} active={active} activeOpacity={0.8}>
            <Circle active={active}>
                <MarketImage source={marketImage} />
            </Circle>
        </Container>
    );
}