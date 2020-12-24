import styled from 'styled-components';
import { Props } from './types';

export const StyledLi = styled.li`
    width:auto;
`;

export const StyledUl = styled.ul<Props>`
    display:flex;
    flex-direction:row;
    margin:0;
    padding:0;
    list-style:none;
    ${pr => 
        pr.display==='block'? `flex-direction:column;${StyledLi}{
        width:100%;
        }`:''
    }
`;