import styled from 'styled-components/native';
import { Type } from '../../utils/typeSvg';

interface Props {
   active?: boolean;
   type: Type;
}

export const Container = styled.View<Props>`
   width: 25px;
   height: 25px;
   border-radius: 12.5px;
   margin: 0px 4px;
   background-color: ${({ theme, active, type }) => active ? theme.colors.type[type] : theme.colors.secondary};
`;