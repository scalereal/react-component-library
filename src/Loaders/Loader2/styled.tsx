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
    border: 1px solid currentcolor;
    animation: 1s loader-01 linear infinite;
    position:relative;
    &:before {
		content: '';
		display: block;
		width: 0;
		height: 0;
		position: absolute;
		/* top: -.2em; */
		left: 50%;
		border: .2em solid currentcolor;
		border-radius: 50%;
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
    ${Loader}{
        
    }
`;
