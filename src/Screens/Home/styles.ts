import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.black};
`;

export const Header = styled.View`
   width: 100%;
   margin-top: 30px;
   padding: 0px 24px;
   flex-direction: row;
   justify-content: space-between;
`;

export const UserInfo = styled.View``;

export const UserName = styled.Text`
   font-size: ${RFValue(20)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.white};
`;

export const Cards = styled.View``;
