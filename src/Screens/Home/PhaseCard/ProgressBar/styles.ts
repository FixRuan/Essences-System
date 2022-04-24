import styled from 'styled-components/native';


interface ProgressBar {
    progress: number;
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
    background-color: ${({ theme }) => theme.colors.type.fire};
    border-radius: 10px;
    opacity: 1;
`;