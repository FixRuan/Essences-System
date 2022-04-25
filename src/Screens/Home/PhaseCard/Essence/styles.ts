import styled from 'styled-components/native';
import { Type } from '../../../../utils/typeSvg';

interface Props {
   type: Type;
}

export const Container = styled.View<Props>`
   width: 30px;
   height: 30px;
   border-radius: 3px;
   align-items: center;
   justify-content: center;
   background-color: ${({ theme, type }) => theme.colors.type[type]};
`;