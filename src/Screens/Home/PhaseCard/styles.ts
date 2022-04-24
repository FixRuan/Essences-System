import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
   width: 100%;
   min-height: 110px;
   background-color: ${({ theme }) => theme.colors.backgroundType.fire};
   border-radius: 10px;
   margin-bottom: 20px;
`;

export const EssenceTypeView = styled.View`
   width: 50px;
   height: 50px;
   align-items: center;
   justify-content: center;
   background-color: ${({ theme }) => theme.colors.black};
   border-radius: 25px;
   position: absolute;
   top: -15px;
   left: -15px;
`;

export const Header = styled.View`
   padding: 0px 48px;
   margin-top: 10px;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`;

export const Title = styled.Text`
   color: ${({ theme }) => theme.colors.black};
   opacity: 0.7;
   font-family: ${({ theme }) => theme.fonts.Alef};
   font-size: ${RFValue(15)}px;
`;

export const Content = styled.View`
   padding: 0px 14px;
   margin-top: 4px;
`;

export const SubTitle = styled.Text`
   color: ${({ theme }) => theme.colors.white};
   font-size: ${RFValue(14)}px;
`;

export const Percentage = styled.Text`
   color: ${({ theme }) => theme.colors.white};
   font-size: ${RFValue(14)}px;
   margin-left: 14px;
   margin-top: 3px;
   margin-bottom: 3px;
   opacity: 0.6;
`;
