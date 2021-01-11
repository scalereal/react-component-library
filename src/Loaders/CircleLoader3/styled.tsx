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
    position: relative;
	&:before {
		content: '';
		display: block;
		width: inherit;
		height: inherit;
		position: absolute;
		top: -.2em;
		;
		left: -.2em;
		;
		border: .2em solid currentcolor;
		border-radius: 50%;
		opacity: .5;
	}
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
                border: 0.2em solid transparent;
            }`;
        case "XS":
            return `font-size: 1rem;
            ${Loader}{
                border: 0.2em solid transparent;
            }
            `;
        case "S":
            return `font-size: 2rem;
            ${Loader}{
                border: 0.2em solid transparent;
            }`;
        
        case "M":
            return `font-size: 3rem;
            ${Loader}{
                border: 0.2em solid transparent;
            }`;

        case "L":
            return `font-size: 5rem;
            ${Loader}{
                border: 0.2em solid transparent;
            }`;
        
        case "XL":
            return `font-size: 6rem;
            ${Loader}{
                border: 0.2em solid transparent;
            }`;
  
      default:
        return `font-size: 1rem;
        ${Loader}{
            border: 0.15em solid transparent;
        }`;
     }
 };

export const LoaderWrapper = styled.div<Props>`
    ${pr => pr.disabled === true?'pointer-events: none;opacity: 0.4;':''}
    ${pr=>  mixin(pr.size)}
    display: ${pr=>pr.display?'inline-block':'none'};
    ${Loader}{
        border-top-color: currentcolor;
    }
`;
