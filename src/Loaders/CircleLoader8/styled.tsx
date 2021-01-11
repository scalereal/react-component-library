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
	animation: loader-10-1 2.0s infinite linear;
	&:before,
	&:after {
		content: '';
		width: 0;
		height: 0;
		border: .5em solid currentcolor;
		display: block;
		position: absolute;
		border-radius: 100%;
		animation: loader-10-2 2s infinite ease-in-out;
	}
	&:before {
		top: 0;
		left: 50%;
	}
	&:after {
		bottom: 0;
		right: 50%;
		animation-delay: -1s;
	}

    @keyframes loader-10-1 {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes loader-10-2 {
        0%,
        100% {
            transform: scale(0);
        }
        50% {
            transform: scale(1);
        }
    }
`;

const mixin = (size:any) => {
    switch (size) {
        case "XXS":
            return `font-size: 0.8rem;
            ${Loader}{
                margin: 5px 0 5px 10px;
            }
           `;
        case "XS":
            return `font-size: 1rem;
            ${Loader}{
                margin: 7px 0 7px 10px;
            }
            `;
        case "S":
            return `font-size: 2rem;
            ${Loader}{
                margin: 15px 0 15px 20px;
            }
            `;
        
        case "M":
            return `font-size: 3rem;
            ${Loader}{
                margin: 18px 0 18px 25px;
            }
            `;

        case "L":
            return `font-size: 5rem;
            ${Loader}{
                margin: 28px 0 28px 40px;
            }
            `;
        
        case "XL":
            return `font-size: 6rem;
            ${Loader}{
                margin: 35px 0 35px 50px;
            }
            `;
  
      default:
        return `font-size: 1rem;
        ${Loader}{
            margin: 15px 0 15px 20px;
        }
       `;
    }
 };

export const LoaderWrapper = styled.div<Props>`
    ${pr => pr.disabled === true?'pointer-events: none;opacity: 0.4;':''}
    ${pr=>  mixin(pr.size)}
    display: ${pr=>pr.display?'inline-block':'none'};
`;
