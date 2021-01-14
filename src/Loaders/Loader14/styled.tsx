import styled from 'styled-components';
import { Props } from '../types';

export const Loader = styled.div<Props>`
    display: inline-block;
    width: 1em;
    height: 1em;
    color: ${pr=>pr.Color?pr.Color:'inherit'};
    vertical-align: middle;
    pointer-events: none;
    
    border-right: .1em solid currentcolor;
	border-radius: 100%;
	animation: loader-37 800ms linear infinite;
	&:before,
	&:after {
		content: '';
		width: .8em;
		height: .8em;
		display: block;
		position: absolute;
		top: calc(50% - .4em);
		left: calc(50% - .4em);
		border-left: .08em solid currentcolor;
		border-radius: 100%;
		animation: loader-37 400ms linear infinite reverse;
	}
	&:after {
		width: .6em;
		height: .6em;
		top: calc(50% - .3em);
		left: calc(50% - .3em);
		border: 0;
		border-right: .05em solid currentcolor;
		animation: none;
	}

    @keyframes loader-37 {
        from {
            transform: rotate(360deg);
        }
        to {
            transform: rotate(0deg);
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
                margin: 0 5px 5px 5px;
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
