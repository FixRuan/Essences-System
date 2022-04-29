import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { Type } from '../../../../utils/typeSvg';

export const Container = styled.View`
    width: 100%;
    min-height: 110px;
    padding-bottom: 30px;
    background-color: ${({ theme }) => theme.colors.white};
    border-top-left-radius: 12px;
    border-top-right-radius: 34px;
    border-bottom-left-radius: 34px;
    border-bottom-right-radius: 12px;
    margin-bottom: 25px;
`;

interface Props {
    type: Type,
}

export const SectionType = styled.View<Props>`
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

export const SectionTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.Alef};
    color: ${({ theme }) => theme.colors.black};
    font-size: ${RFValue(16)}px;
    opacity: 0.6;
    margin-left: 52px;
    margin-top: 6px;
`;

export const SectionDescription = styled.Text`
    color: ${({ theme }) => theme.colors.black};
    font-size: ${RFValue(15)}px;
    line-height: 22px;
    max-width: 280px;
    margin-left: 50px;
    margin-top: 6px;
    text-align: justify;
`;