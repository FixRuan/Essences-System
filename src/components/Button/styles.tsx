import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Type } from '../../utils/typeSvg';

export const Container = styled.View``;

interface Props {
    type: Type;
}

export const Circle = styled(TouchableOpacity) <Props>`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-left: 20px;
    align-items: center;
    justify-content: center;

    ${({ theme, type }) => css`
        background-color: ${type === 'normal'
            ? theme.colors.secondary
            : theme.colors.type[type]
        };
    `}
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.white};
    padding-left: 20px;
    margin-top: 8px;
`;