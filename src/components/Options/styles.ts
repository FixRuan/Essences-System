import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { Type } from '../../utils/typeSvg';

export const Container = styled.View`
    width: 90%;
    min-height: 110px;
    padding-bottom: 30px;
    background-color: ${({ theme }) => theme.colors.white};
    border-top-left-radius: 12px;
    border-top-right-radius: 34px;
    border-bottom-left-radius: 34px;
    border-bottom-right-radius: 12px;
    margin-bottom: 25px;
`;

export const SectionType = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: ${({ theme }) => theme.colors.black};
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -12px;
    left: -12px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.Alef};
    color: ${({ theme }) => theme.colors.black};
    font-size: ${RFValue(16)}px;
    opacity: 0.6;
    margin-left: 56px;
    margin-top: 6px;
`;

export const ButtonGroup = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 12px;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;