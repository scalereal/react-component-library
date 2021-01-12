import styled from 'styled-components';
import { Props } from '../types';

export const Loader = styled.div<Props>`
    display: inline-block;
    width: 1em;
    height: 1em;
    color: ${pr=>pr.Color?pr.Color:'inherit'};
    vertical-align: middle;
    pointer-events: none;
    
    border: 0 solid transparent;
	border-radius: 50%;
	position: relative;
	&:before,
	&:after {
		content: '';
		border: .2em solid currentcolor;
		border-radius: 50%;
		width: inherit;
		height: inherit;
		position: absolute;
		top: 0;
		left: 0;
		animation: loader-07 1s linear infinite;
		opacity: 0;
	}
	&:before {
		animation-delay: 1s;
	}
	&:after {
		animation-delay: .5s;
	}

    @keyframes loader-07 {
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
            ${Loader}{
                margin: 0 5px 5px 0;
            }
           `;
        case "XS":
            return `font-size: 1rem;
            ${Loader}{
                margin: 0 8px 8px 0;
            }
            `;
        case "S":
            return `font-size: 2rem;
            ${Loader}{
                margin: 0 15px 15px 0;
            }
            `;
        
        case "M":
            return `font-size: 3rem;
            ${Loader}{
                margin: 0 20px 20px 0;
            }
            `;

        case "L":
            return `font-size: 5rem;
            ${Loader}{
                margin: 0 30px 30px 0;
            }
            `;
        
        case "XL":
            return `font-size: 6rem;
            ${Loader}{
                margin: 0 45px 45px 0;
            }
            `;
  
      default:
        return `font-size: 1rem;
        ${Loader}{
            margin: 0 8px 8px 0;
        }
       `;
     }
 };

export const LoaderWrapper = styled.div<Props>`
    ${pr => pr.disabled === true?'pointer-events: none;opacity: 0.4;':''}
    ${pr=>  mixin(pr.size)}
    display: ${pr=>pr.display?'inline-block':'none'};
`;
