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
	box-shadow: 0 1em 0 -.2em currentcolor;
	position: relative;
	animation: loader-14 0.8s ease-in-out alternate infinite;
	animation-delay: 0.32s;
	top: -1em;
	&:after,
	&:before {
		content: '';
		position: absolute;
		width: inherit;
		height: inherit;
		border-radius: inherit;
		box-shadow: inherit;
		animation: inherit;
	}
	&:before {
		left: -1em;
		animation-delay: 0.48s;
	}
	&:after {
		right: -1em;
		animation-delay: 0.16s;
	}

    @keyframes loader-14 {
        0% {
            box-shadow: 0 2em 0 -.2em currentcolor;
        }
        100% {
            box-shadow: 0 1em 0 -.2em currentcolor;
        }
    }
`;

const mixin = (size:any) => {
    switch (size) {
        case "XXS":
            return `font-size: 0.8rem;
            ${Loader}{
                margin: 0 15px 15px 15px;
                top: -1em;
            }
           `;
        case "XS":
            return `font-size: 1rem;
            ${Loader}{
                margin: 0 15px 15px 15px;
                top: -1em;
            }
            
            `;
        case "S":
            return `font-size: 2rem;
            ${Loader}{
                margin: 0 25px 25px 25px;
                top: -1.1em;
            }
            `;
        
        case "M":
            return `font-size: 3rem;
            ${Loader}{
                margin: 0 40px 35px 40px;
                top: -1.1em;
            }
            `;

        case "L":
            return `font-size: 5rem;
            ${Loader}{
                margin: 0 65px 50px 65px;
                top: -1.2em;
            }
            `;
        
        case "XL":
            return `font-size: 6rem;
            ${Loader}{
                margin: 0 80px 60px 80px;
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
    display: ${pr=>pr.visible?'inline-block':'none'};
`;
