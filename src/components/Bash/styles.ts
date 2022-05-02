import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { Type } from '../../utils/typeSvg';

interface Props {
   type: Type,
}

export const Container = styled.View`
   width: 70%;
   min-height: 110px;
   padding-bottom: 30px;
   background-color: ${({ theme }) => theme.colors.white};
   border-top-left-radius: 12px;
   border-top-right-radius: 34px;
   border-bottom-left-radius: 34px;
   border-bottom-right-radius: 12px;
   margin-bottom: 25px;
`;

export const BashType = styled.View<Props>`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: ${({ theme, type }) => theme.colors.type[type]};
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -12px;
    left: -12px;
`;

export const BashTitle = styled.Text`
   font-family: ${({ theme }) => theme.fonts.Alef};
   color: ${({ theme }) => theme.colors.black};
   font-size: ${RFValue(16)}px;
   opacity: 0.6;
   margin-left: 54px;
   margin-top: 6px;
`;

export const Content = styled.View`
   max-width: 180px;
   min-width: 180px;
   min-height: 30px;
   flex-direction: row;
   flex-wrap: wrap;
   background-color: ${({ theme }) => theme.colors.white};
   align-self: center;
   margin-top: 20px;
`;