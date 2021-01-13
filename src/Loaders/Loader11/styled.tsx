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
	animation-fill-mode: both;
	animation: loader-13 1.8s infinite ease-in-out;
    &:after,&:before{
        border-radius: 50%;
        animation-fill-mode: both;
        animation: loader-13 1.8s infinite ease-in-out;
    }

    /* color: currentcolor; */
    position: relative;
    transform: translateZ(0);
    animation-delay: -0.16s;
    &:before {
        right: 100%;
        animation-delay: -0.32s;
    }
    &:after {
        left: 100%;
    }
    &:before,
    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        width: inherit;
        height: inherit;
    }

    @keyframes loader-13 {
        0%,
        80%,
        100% {
            box-shadow: 0 1em 0 -1em;
        }
        40% {
            box-shadow: 0 1em 0 -.2em;
        }
    }

`;

const mixin = (size:any) => {
    switch (size) {
        case "XXS":
            return `font-size: 0.8rem;
            ${Loader}{
                margin:0 15px;
                top: -1em;
            }
           `;
        case "XS":
            return `font-size: 1rem;
            ${Loader}{
                margin:0 18px;
                top: -1em;
            }
            
            `;
        case "S":
            return `font-size: 2rem;
            ${Loader}{
                margin:0 25px;
                top: -1.1em;
            }
            `;
        
        case "M":
            return `font-size: 3rem;
            ${Loader}{
                margin:0 40px;
                top: -1.1em;
            }
            `;

        case "L":
            return `font-size: 5rem;
            ${Loader}{
                margin:0 65px;
                top: -1.2em;
            }
            `;
        
        case "XL":
            return `font-size: 6rem;
            ${Loader}{
                margin:0 80px;
                top: -1.2em;
            }
            `;
  
      default:
        return `font-size: 1rem;
        ${Loader}{
            margin:0 25px;
        }
       `;
     }
 };

export const LoaderWrapper = styled.div<Props>`
    ${pr => pr.disabled === true?'pointer-events: none;opacity: 0.4;':''}
    ${pr=>  mixin(pr.size)}
    display: ${pr=>pr.display?'inline-block':'none'};
`;
