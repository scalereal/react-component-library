import styled from 'styled-components';
import { Props } from '../types';

export const Loader = styled.div<Props>`
    display: inline-block;
    width: 1em;
    height: 1em;
    color: ${pr=>pr.Color?pr.Color:'inherit'};
    vertical-align: middle;
    pointer-events: none;
    border-radius: 50%;
    animation: 1s loader-01 linear infinite;

    @keyframes loader-01 {
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
            ${Loader}{
                border: 0.188em dotted currentcolor;
            }`;
        case "XS":
            return `font-size: 1rem;
            ${Loader}{
                border: 0.188em dotted currentcolor;
            }
            `;
        case "S":
            return `font-size: 2rem;
            ${Loader}{
                border: 0.2em dotted currentcolor;
            }`;
        
        case "M":
            return `font-size: 3rem;
            ${Loader}{
                border: 0.2em dotted currentcolor;
            }`;

        case "L":
            return `font-size: 5rem;
            ${Loader}{
                border: 0.2em dotted currentcolor;
            }`;
        
        case "XL":
            return `font-size: 6rem;
            ${Loader}{
                border: 0.2em dotted currentcolor;
            }`;
  
      default:
        return `font-size: 1rem;
        ${Loader}{
            border: 0.15em dotted currentcolor;
        }`;
     }
 };

export const LoaderWrapper = styled.div<Props>`
    ${pr => pr.disabled === true?'pointer-events: none;opacity: 0.4;':''}
    ${pr=>  mixin(pr.size)}
    display: ${pr=>pr.visible?'inline-block':'none'};
`;
