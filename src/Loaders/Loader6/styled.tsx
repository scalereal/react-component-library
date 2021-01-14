import styled from 'styled-components';
import { Props } from '../types';

export const Loader = styled.div<Props>`
    display: inline-block;
    width: 1em;
    height: 1em;
    color: ${pr=>pr.Color?pr.Color:'inherit'};
    vertical-align: middle;
    pointer-events: none;
    
    position: relative;
	&:before,
	&:after {
		content: '';
		width: inherit;
		height: inherit;
		border-radius: 50%;
		background-color: currentcolor;
		opacity: 0.6;
		position: absolute;
		top: 0;
		left: 0;
		animation: loader-08 2.0s infinite ease-in-out;
	}
	&:after {
		animation-delay: -1.0s;
	}

    @keyframes loader-08 {
        0%,
        100% {
            transform: scale(0.0);
        }
        50% {
            transform: scale(1.0);
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
