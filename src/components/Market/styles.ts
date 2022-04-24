import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

interface Props {
    active: boolean;
}

export const Container = styled(TouchableOpacity) <Props>`
   width: 50px;
   height: 50px;
   background-color: ${({ theme, active }) => active ? theme.colors.white : theme.colors.black};
   align-items: center;
   justify-content: center;
   align-items: center;
   justify-content: center;
   transform: rotate(45deg);
`;

export const Circle = styled.View<Props>`
   width: 60px;
   height: 60px;
   background-color: ${({ theme, active }) => active ? theme.colors.black : theme.colors.white};
   border-radius: 30px;
   align-items: center;
   justify-content: center;
   transform: rotate(-45deg);
`;

export const MarketImage = styled.Image``;