import styled from 'styled-components/native'

export const Container = styled.View`
   width: 30px;
   height: 30px;
   border-radius: 3px;
   align-items: center;
   justify-content: center;
   background-color: ${({ theme }) => theme.colors.type.fire};
`;