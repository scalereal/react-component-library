import styled from 'styled-components';
import { Props } from '../types';

export const StyledLoader = styled.div<Props>`
    display: inline-block;
    width: 1em;
    height: 1em;
    vertical-align: middle;
    pointer-events: none;
    border-radius: 50%;
    animation: 1s StyledLoader-01 linear infinite;

    @keyframes StyledLoader-01 {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    
`;

const mixin = (size:any) => {
    switch (size) {
        case "XXS":
            return `font-size: 0.8rem;
            ${StyledLoader}{
                border: 0.188em solid transparent;
            }`;
        case "XS":
            return `font-size: 1rem;
            ${StyledLoader}{
                border: 0.188em solid transparent;
            }
            `;
        case "S":
            return `font-size: 2rem;
            ${StyledLoader}{
                border: 0.2em solid transparent;
            }`;
        
        case "M":
            return `font-size: 3rem;
            ${StyledLoader}{
                border: 0.2em solid transparent;
            }`;

        case "L":
            return `font-size: 5rem;
            ${StyledLoader}{
                border: 0.2em solid transparent;
            }`;
        
        case "XL":
            return `font-size: 6rem;
            ${StyledLoader}{
                border: 0.2em solid transparent;
            }`;
  
      default:
        return `font-size: 1rem;
        ${StyledLoader}{
            border: 0.15em solid transparent;
        }`;
     }
 };

export const LoaderWrapper = styled.div<Props>`
    ${pr => pr.disabled === true?'pointer-events: none;opacity: 0.4;':''}
    ${pr=>  mixin(pr.size)}
    display: ${pr=>pr.display?'inline-block':'none'};
    ${StyledLoader}{
        border-left-color:  ${pr=>pr.Color?pr.Color:'inherit'};
        border-right-color:  ${pr=>pr.Color?pr.Color:'inherit'};
    }
`;
