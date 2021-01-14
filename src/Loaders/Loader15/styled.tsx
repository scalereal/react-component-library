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
    width: .15em;
    height: .15em;
    background-color: currentcolor;
    border-radius: 100%;
    animation: loader-39-1 30s infinite linear;
	&:before, &:after {
		content: '';
		border-radius: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	&:before {
		width: .3em;
		height: 1em;
		animation: loader-39-2 .8s linear infinite;
	}
	&:after {
		width: 1em;
		height: .3em;
		animation: loader-39-2 1.2s linear infinite;
	}

    @keyframes loader-39-1 {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes loader-39-2 {
        0% {
            box-shadow: 0.04em -0.04em 0 0.02em currentcolor;
        }
        25% {
            box-shadow: 0.04em 0.04em 0 0.02em currentcolor;
        }
        50% {
            box-shadow: -0.04em 0.04em 0 0.02em currentcolor;
        }
        75% {
            box-shadow: -0.04em -0.04em 0 0.02em currentcolor;
        }
        100% {
            box-shadow: 0.04em -0.04em 0 0.02em currentcolor;
        }
    }
`;

const mixin = (size:any) => {
    switch (size) {
        case "XXS":
            return `font-size: 0.8rem;
            ${Loader}{
                margin: 10px;
            }
           `;
        case "XS":
            return `font-size: 1rem;
            ${Loader}{
                margin: 10px;
            }
            
            `;
        case "S":
            return `font-size: 2rem;
            ${Loader}{
                margin: 17px;
            }
            `;
        
        case "M":
            return `font-size: 3rem;
            ${Loader}{
                margin: 25px;
            }
            `;

        case "L":
            return `font-size: 5rem;
            ${Loader}{
                margin: 45px;
            }
            `;
        
        case "XL":
            return `font-size: 6rem;
            ${Loader}{
                margin: 55px;
            }
            `;
  
      default:
        return `font-size: 1rem;
        ${Loader}{
            margin: 10px;
        }
       `;
     }
 };

export const LoaderWrapper = styled.div<Props>`
    ${pr => pr.disabled === true?'pointer-events: none;opacity: 0.4;':''}
    ${pr=>  mixin(pr.size)}
    display: ${pr=>pr.visible?'inline-block':'none'};
`;
