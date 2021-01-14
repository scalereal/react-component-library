import styled from 'styled-components';
import { Props } from '../types';

export const Loader = styled.div<Props>`
    display: inline-block;
    width: 1em;
    height: 1em;
    color: ${pr=>pr.Color?pr.Color:'inherit'};
    vertical-align: middle;
    pointer-events: none;
    
    transform: rotateZ(45deg);
	perspective: 1000px;
	border-radius: 50%;
	&:before,
	&:after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: inherit;
		height: inherit;
		border-radius: 50%;
		animation: 1s spin linear infinite;
	}
	&:before {
		transform: rotateX(70deg);
	}
	&:after {
		transform: rotateY(70deg);
		animation-delay: .4s;
	}

    @keyframes rotate {
        0% {
            transform: translate(-50%, -50%) rotateZ(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotateZ(360deg);
        }
    }

    @keyframes rotateccw {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(-360deg);
        }
    }

    @keyframes spin {
        0%,
        100% {
            box-shadow: .2em 0px 0 0px currentcolor;
        }
        12% {
            box-shadow: .2em .2em 0 0 currentcolor;
        }
        25% {
            box-shadow: 0 .2em 0 0px currentcolor;
        }
        37% {
            box-shadow: -.2em .2em 0 0 currentcolor;
        }
        50% {
            box-shadow: -.2em 0 0 0 currentcolor;
        }
        62% {
            box-shadow: -.2em -.2em 0 0 currentcolor;
        }
        75% {
            box-shadow: 0px -.2em 0 0 currentcolor;
        }
        87% {
            box-shadow: .2em -.2em 0 0 currentcolor;
        }
    }
`;

const mixin = (size:any) => {
    switch (size) {
        case "XXS":
            return `font-size: 0.8rem;
            ${Loader}{
                margin: 0 2px 2px 2px;
            }
           `;
        case "XS":
            return `font-size: 1rem;
            ${Loader}{
                margin: 0 3px 3px 3px;
            }
            
            `;
        case "S":
            return `font-size: 2rem;
            ${Loader}{
                margin: 0 5px 5px 5px;
            }
            `;
        
        case "M":
            return `font-size: 3rem;
            ${Loader}{
                margin: 0 9px 9px 9px;
            }
            `;

        case "L":
            return `font-size: 5rem;
            ${Loader}{
                margin: 0 10px 10px 10px;
            }
            `;
        
        case "XL":
            return `font-size: 6rem;
            ${Loader}{
                margin: 0 10px 10px 10px;
            }
            `;
  
      default:
        return `font-size: 1rem;
        ${Loader}{
            margin: 0 3px 3px 3px;
        }
       `;
     }
 };

export const LoaderWrapper = styled.div<Props>`
    ${pr => pr.disabled === true?'pointer-events: none;opacity: 0.4;':''}
    ${pr=>  mixin(pr.size)}
    display: ${pr=>pr.visible?'inline-block':'none'};
`;
