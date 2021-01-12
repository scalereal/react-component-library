import styled from 'styled-components';
import { LoaderProps } from './types';

const mixin = (size:string) => {
    switch (size) {
        case "XXS":
            return `
                border: 1px solid transparent;
                height: 10px;
                width: 10px;
                &:before{
                    border: 1px solid transparent;
                    top: 2px;
                    left: 2px;
                    right: 2px;
                    bottom: 2px;
                }
           `;
        case "XS":
            return `
                border: 2px solid transparent;
                height: 20px;
                width: 20px;
                &:before{
                    border: 2px solid transparent;
                    top: 3px;
                    left: 3px;
                    right: 3px;
                    bottom: 3px;
                }
            `;
        case "S":
            return `
            border: 4px solid transparent;
            height: 40px;
            width: 40px;
            &:before{
                border: 4px solid transparent;
                top: 5px;
                left: 5px;
                right: 5px;
                bottom: 5px;
            }
            `;
        
        case "M":
            return `
            border: 5px solid transparent;
            height: 60px;
            width: 60px;
            &:before{
                border: 5px solid transparent;
                top: 8px;
                left: 8px;
                right: 8px;
                bottom: 8px;
            }
            `;

        case "L":
            return `
            border: 6px solid transparent;
            height: 80px;
            width: 80px;
            &:before{
                border: 6px solid transparent;
                top: 12px;
                left: 12px;
                right: 12px;
                bottom: 12px;
            }
            `;
        
        case "XL":
            return `
            border: 7px solid transparent;
            height: 120px;
            width: 120px;
            &:before{
                border: 7px solid transparent;
                top: 16px;
                left: 16px;
                right: 16px;
                bottom: 16px;
            }
            `;
  
      default:
        return `
        border: 1px solid transparent;
        height: 100px;
        width: 100px;
        &:before{
            border: 1px solid transparent;
            top: 3px;
            left: 3px;
            right: 3px;
            bottom: 3px;
        }
       `;
     }
 };

export const Loader = styled.div<LoaderProps>`
    ${pr=> pr.size && mixin(pr.size)}
    position: relative;
    border-top-color: ${pr=>pr.Color?pr.Color:'#1976d2'};
    border-left-color: ${pr=>pr.Color?pr.Color:'#1976d2'};
    border-radius: 50%;
    -webkit-animation: spin 1.5s linear infinite;
    animation: spin 1.5s linear infinite;

    &:before {
    position: absolute;
    content: "";
    border-top-color: ${pr=>pr.innerColor?pr.innerColor:'#03a9f4'};
    border-left-color: ${pr=>pr.innerColor?pr.innerColor:'#03a9f4'};
    border-radius: 50%;
    -webkit-animation: spinBack 1s linear infinite;
    animation: spinBack 1s linear infinite;
    }

    @-webkit-keyframes spin {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes spin {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes spinBack {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(-720deg);
            transform: rotate(-720deg);
        }
    }

    @keyframes spinBack {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(-720deg);
            transform: rotate(-720deg);
        }
    }
`;

export const LoaderWrapper = styled.div<LoaderProps>`
    ${pr => pr.disabled === true?'pointer-events: none;opacity: 0.4;':''}
    display: ${pr=>pr.display?'inline-block':'none'};
`;

export const StyledWrapper = styled.div<LoaderProps>`
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
`;
