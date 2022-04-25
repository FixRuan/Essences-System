import styled from 'styled-components/native';
import { Type } from '../../../../utils/typeSvg';


interface ProgressBar {
    progress: number;
    type: Type;
}

export const Container = styled.View`
   width: 100%;
   height: 16px;
   background-color: ${({ theme }) => theme.colors.white};
   opacity: 1;
   border-radius: 10px;
`;

export const Progress = styled.View<ProgressBar>`
    width: ${({ progress }) => progress}%;
    height: 100%;
    background-color: ${({ theme, type }) => theme.colors.type[type]};
    border-radius: 10px;
    opacity: 1;
`;