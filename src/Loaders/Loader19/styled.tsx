import styled from 'styled-components';
import { LoaderProps } from './types';

const mixin = (size:any,Color:any) => {
    switch (size) {
        case "XXS":
            return `
                height: 15px;
                width: 15px;
                border: 1px solid transparent;
                border-top: 1px solid ${Color || '#FF5722'};
                &:before,&:after{
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
                border-top: 2px solid ${Color || '#FF5722'};
                &:before,&:after{
                    top: 2px;
                    right: 2px;
                    bottom: 2px;
                    left: 2px;
                    border: 2px solid transparent;
                }
            `;
        case "S":
            return `
            height: 40px;
            width: 40px;
            border: 4px solid transparent;
            border-top: 4px solid ${Color || '#FF5722'};
            &:before,&:after{
                top: 3px;
                right: 3px;
                bottom: 3px;
                left: 3px;
                border: 4px solid transparent;
            }
            `;
        
        case "M":
            return `
            height: 60px;
            width: 60px;
            border: 5px solid transparent;
            border-top: 5px solid ${Color || '#FF5722'};
            &:before,&:after{
                top: 4px;
                right: 4px;
                bottom: 4px;
                left: 4px;
                border: 5px solid transparent;
            }
            `;

        case "L":
            return `
                border: 6px solid transparent;
                height: 80px;
                width: 80px;
                border-top: 6px solid ${Color || '#FF5722'};
                &:before,&:after{
                    top: 5px;
                    right: 5px;
                    bottom: 5px;
                    left: 5px;
                    border: 6px solid transparent;
                }
            `;
        
        case "XL":
            return `
            height: 120px;
            width: 120px;
            border: 6px solid transparent;
            border-top: 6px solid ${Color || '#FF5722'};
            &:before,&:after{
                top: 7px;
                right: 7px;
                bottom: 7px;
                left: 7px;
                border: 6px solid transparent;
            }
            `;
  
    }
 };

export const Loader = styled.div<LoaderProps>`
    ${pr=> mixin(pr.size,pr.Color)}

    border-radius: 50%;
    -webkit-animation: spin 4s linear infinite;
    animation: spin 4s linear infinite;
    position: relative;

    &:before,
    &:after {
        content: "";
        position: absolute;
        border-radius: 50%;
    }

    &:before {
        border-top-color: ${pr=>  pr.innerColor || '#bad375'};
        -webkit-animation: 3s spin linear infinite;
        animation: 3s spin linear infinite;
    }

    &:after {
        border-top-color: ${pr=>  pr.coreColor || '#26a9e0'};
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
    display: ${pr=>pr.visible?'inline-block':'none'};
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
