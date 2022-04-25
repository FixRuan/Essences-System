import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Type } from '../../../utils/typeSvg';

interface Props {
    type: Type;
}

export const Card = styled.View`
    margin-bottom: 24px;
`;

export const Container = styled.View`
   width: 155px;
   height: 105px;
   background-color: ${({ theme }) => theme.colors.white};
   margin-left: 8px;
   margin-right: 8px;
   border-top-left-radius: 10px;
   border-top-right-radius: 35px;
   border-bottom-right-radius: 10px;
   border-bottom-left-radius: 35px;
`;

export const TypeCircle = styled.View<Props>`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: ${({ theme, type }) => theme.colors.type[type]};
    position: absolute;
    top: -10px;
    right: -10px;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    margin-top: 10px;
    margin-left: 6px;
    flex-direction: row;
    align-items: center;
`;

export const ItemTobeSold = styled.Image``;

export const AboutItem = styled.View`
    margin-left: 12px;
`;

export const ItemName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.black};
    font-size: ${RFValue(16)}px;
`;

export const ItemDescription = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.black};
    font-size: ${RFValue(14)}px;
    opacity: 0.76;
`;

export const Price = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
    margin-left: 8px;
`;

type PriceProps = {
    type: Type;
}

export const ItemPrice = styled.Text<PriceProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme, type }) => theme.colors.type[type]};
    font-size: ${RFValue(16)}px;
    margin-left: 6px;
`;

export const BuyButton = styled.TouchableOpacity<PriceProps>`
    padding: 6px;
    width: 80px;
    background-color: ${({ theme, type }) => theme.colors.type[type]};
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    margin-left: 62px;
    margin-top: -20px;
    
`;

export const ButtonText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${RFValue(14)}px;
`;
