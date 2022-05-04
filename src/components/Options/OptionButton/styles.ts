import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Type } from '../../../utils/typeSvg';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
    type: Type;
}

export const Container = styled(TouchableOpacity) <Props>`
   width: 43%;
   background-color: ${({ theme, type }) => theme.colors.type[type]};
   height: 36px;
   margin-bottom: 10px;
   margin-left: 6px;
   margin-right: 6px;
   border-radius: 4px;
   flex-direction: row;
   align-items: center;
   justify-content: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.Alef};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${RFValue(16)}px;
    margin-left: 6px;
`;