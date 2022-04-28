import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Type } from '../../../utils/typeSvg';

interface Props {
    type: Type;
}

export const Container = styled.View<Props>`
   width: 100%;
   height: 120px;
   background-color: ${({ theme, type }) => theme.colors.backgroundType[type]};
   margin-bottom: 20px;
   border-top-left-radius: 12px;
   border-top-right-radius: 46px;
   border-bottom-left-radius: 46px;
   border-bottom-right-radius: 12px;
`;

export const TypeCircle = styled.View`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.black};
    position: absolute;
    top: -15px;
    left: -15px;
    align-items: center;
    justify-content: center;
`;

export const PhasesInfo = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const PhaseType = styled.View<Props>`
    padding: 0px 6px;
    height: 25px;
    background-color: ${({ theme, type }) => theme.colors.type[type]};
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border-radius: 3px;
    position: absolute;
    bottom: -6px;
    right: 20px;
`;

export const TypeName = styled.Text`
    margin-left: 4px;
    color: ${({ theme }) => theme.colors.white};
`;

export const PhaseComplete = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TotalEssences = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;
