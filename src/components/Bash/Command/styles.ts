import styled from 'styled-components/native';
import { Type } from '../../../utils/typeSvg';


interface Props {
    type: Type,
}

export const Container = styled.View<Props>`
    width: 32px;
    height: 32px;
    border-radius: 6px;
    background-color: ${({ theme, type }) => theme.colors.type[type]};
    margin-left: 8px;
    margin-bottom: 6px;
    align-items: center;
    justify-content: center;
`;

export const NewLine = styled.View`
    width: 20px;
    height: 32px;
`;