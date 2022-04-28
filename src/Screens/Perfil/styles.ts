import { ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props {
    type?: string;
}

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.black};
`;

export const Header = styled.View<Props>`
    width: 100%;
    height: 80px;
    border-bottom-width: 2px;
    border-bottom-color: ${({ theme, type }) => theme.colors.white};
    flex-direction: row;
    align-items: center;
    padding: 0px 20px;
`;

export const Title = styled.Text<Props>`
    color: ${({ theme, type }) => theme.colors.white};
    font-size: ${RFValue(20)}px;
    font-weight: normal;
    align-self: center;
    margin-left: 35%;
`;

export const UserInfo = styled.View`
    margin-top: 20px;
    padding: 0px 20px;
    flex-direction: row;
    align-items: center;
`;

export const Visual = styled.View<Props>`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 3px solid ${({ theme, type }) => type != 'normal' ? theme.colors.type[type] : theme.colors.gray};
    align-items: center;
    justify-content: center;
`;

export const Avatar = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 50px;
`;

export const BorderType = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: ${({ theme }) => theme.colors.black};
    position: absolute;
    right: -15px;
    top: -15px;
    align-items: center;
    justify-content: center;
`;

export const Info = styled.View`
    margin-left: 30px;
`;

export const Pattern = styled.ImageBackground`
    width: 100%;
    height: 80px;
    position: absolute;
    top: 6px;
`;

export const Name = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${RFValue(32)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    opacity: 0.8;
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${RFValue(16)}px;
`;

export const Description = styled.Text`
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${RFValue(14)}px;
    opacity: 0.7;
`;

export const Cards = styled(ScrollView)`
    margin-top: 32px;
    padding: 12px 52px 0px 20px;
`;
