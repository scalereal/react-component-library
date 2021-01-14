import styled from 'styled-components';
import { Props } from '../types';

export const Loader = styled.div<Props>`
    display: inline-block;
    width: 1em;
    height: 1em;
    color: ${pr=>pr.Color?pr.Color:'inherit'};
    vertical-align: middle;
    pointer-events: none;
    
    background-color: currentcolor;
	animation: loader-11 1.2s infinite ease-in-out;

    @keyframes loader-11 {
        0% {
            transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        }
        50% {
            transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
        }
        100% {
            transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
        }
    }

`;

const mixin = (size:any) => {
    switch (size) {
        case "XXS":
            return `font-size: 0.8rem;
           `;
        case "XS":
            return `font-size: 1rem;
            
            `;
        case "S":
            return `font-size: 2rem;
            `;
        
        case "M":
            return `font-size: 3rem;
            `;

        case "L":
            return `font-size: 5rem;
            `;
        
        case "XL":
            return `font-size: 6rem;
            `;
  
      default:
        return `font-size: 1rem;
       `;
     }
 };

export const LoaderWrapper = styled.div<Props>`
    ${pr => pr.disabled === true?'pointer-events: none;opacity: 0.4;':''}
    ${pr=>  mixin(pr.size)}
    display: ${pr=>pr.visible?'inline-block':'none'};
`;
