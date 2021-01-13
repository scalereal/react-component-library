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
		display: block;
		position: absolute;
		background-color: currentcolor;
		left: 50%;
		right: 0;
		top: 0;
		bottom: 50%;
		box-shadow: -.5em 0 0 currentcolor;
		animation: loader-12 1s linear infinite;
	}
	&:after {
		top: 50%;
		bottom: 0;
		animation-delay: .25s;
	}

    @keyframes loader-12 {
        0%,
        100% {
            box-shadow: -.5em 0 0 transparent;
            background-color: currentcolor;
        }
        50% {
            box-shadow: -.5em 0 0 currentcolor;
            background-color: transparent;
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
    display: ${pr=>pr.display?'inline-block':'none'};
`;
