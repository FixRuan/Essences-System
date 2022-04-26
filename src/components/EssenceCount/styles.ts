import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
   flex-direction: row;
   align-items: center;
   align-self: flex-end;
   margin-top: 10px;
`;

export const EssenceNumber = styled.Text`
    font-size: ${RFValue(28)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.white};
    margin-left: 10px;
    margin-top: -6px;
`;