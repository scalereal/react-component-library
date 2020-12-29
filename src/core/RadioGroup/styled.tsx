import styled from 'styled-components';
import { radioTheme } from '../../theme/core/radio';
import { Props } from './types';

export const ErrorLabel = styled.label`
    display:block;
    color: ${radioTheme.defaults.errorTextColor};
    padding:0.5rem 0.3rem;
`;

export const StyledLi = styled.li`
    width:auto;
    padding-right:1.5rem;
`;

export const StyledUl = styled.ul<Props>`
    display:flex;
    flex-direction:row;
    margin:0;
    padding:0.3rem;
    list-style:none;
    ${pr => 
        pr.display==='block'? `flex-direction:column;${StyledLi}{
        width:100%;
        }`:''
    }
`;

export const RadioGroupWrapper = styled.div<Props>`
    ${pr => pr.disabled === true?'pointer-events: none;opacity: 0.4;':''};

`;

export const StyledWrapper = styled.div<Props>`
    
`;