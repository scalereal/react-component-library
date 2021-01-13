import styled from 'styled-components';
import { LoaderProps } from './types';

const mixin = (size:string) => {
    switch (size) {
        case "XXS":
            return `
                height: 10px;
                width: 10px;
                border: 1px solid transparent;
                &:before{
                    top: 2px;
                    right: 2px;
                    bottom: 2px;
                    left: 2px;
                    border: 1px solid transparent;
                }
           `;
        case "XS":
            return `
                height: 20px;
                width: 20px;
                border: 2px solid transparent;
                &:before{
                    top: 5px;
                    right: 5px;
                    bottom: 5px;
                    left: 5px;
                    border: 2px solid transparent;
                }
            `;
        case "S":
            return `
            height: 40px;
            width: 40px;
            border: 4px solid transparent;
            &:before{
                top: 8px;
                right: 8px;
                bottom: 8px;
                left: 8px;
                border: 4px solid transparent;
            }
            `;
        
        case "M":
            return `
            height: 60px;
            width: 60px;
            border: 5px solid transparent;
            &:before{
                top: 10px;
                right: 10px;
                bottom: 10px;
                left: 10px;
                border: 5px solid transparent;
            }
            `;

        case "L":
            return `
                border: 6px solid transparent;
                height: 80px;
                width: 80px;
            &:before{
                top: 10px;
                right: 10px;
                bottom: 10px;
                left: 10px;
                border: 5px solid transparent;
            }
            `;
        
        case "XL":
            return `
            height: 120px;
            width: 120px;
            border: 6px solid transparent;
            &:before{
                top: 20px;
                right: 20px;
                bottom: 20px;
                left: 20px;
                border: 6px solid transparent;
            }
            `;
  
      default:
        return `
        height: 115px;
        width: 115px;
        border: 5px solid transparent;
        &:before{
            top: 20px;
            right: 20px;
            bottom: 20px;
            left: 20px;
            border: 5px solid transparent;
        }
       `;
     }
 };

export const Loader = styled.div<LoaderProps>`
    ${pr=> pr.size && mixin(pr.size)}

    border-top-color: ${pr=>pr.Color?pr.Color:'#9C27B0'};
    border-bottom-color: ${pr=>pr.Color?pr.Color:'#9C27B0'};
    border-radius: 50%;
    position: relative;
    -webkit-animation: spin 3s linear infinite;
            animation: spin 3s linear infinite;

    &:before{
        content: "";
        position: absolute;
        border-top-color: ${pr=>pr.innerColor?pr.innerColor:'#BA68C8'};
        border-bottom-color: ${pr=>pr.innerColor?pr.innerColor:'#BA68C8'};
        border-radius: 50%;
        -webkit-animation: spin 1.5s linear infinite;
        animation: spin 1.5s linear infinite;

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
