import styled from 'styled-components';
import { Props } from '../types';

export const Loader = styled.div<Props>`
    display: inline-block;
    width: 1em;
    height: 1em;
    color: ${pr=>pr.Color?pr.Color:'inherit'};
    vertical-align: middle;
    pointer-events: none;
    
    border: .2em solid currentcolor;
	border-radius: 50%;
	animation: loader-06 1s ease-out infinite;

    @keyframes loader-06 {
        0% {
            transform: scale(0);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 0;
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
