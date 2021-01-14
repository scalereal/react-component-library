import styled from 'styled-components';
import { Props } from '../types';

const mixin = (size:any) => {
    switch (size) {
        case "S":
            return `
            height: 60px;
            width: 60px;
            .multi-spinner {
                border: 3px solid transparent;
            }
            `;
        
        case "M":
            return `
            height: 80px;
            width: 80px;
            .multi-spinner {
                border: 4px solid transparent;
            }
            `;

        case "L":
            return `
                height: 120px;
                width: 120px;
                .multi-spinner {
                    border: 5px solid transparent;
                }
            `;
        
        case "XL":
            return `
            height: 150px;
            width: 150px;
            .multi-spinner {
                border: 5px solid transparent;
            }
            `;
  
    }
 };

export const Loader = styled.div<Props>`
    ${pr=> mixin(pr.size)}

    position: relative;
    margin: auto;
    overflow: hidden;

    .multi-spinner {
        position: absolute;
        width: calc(100% - 9.9px);
        height: calc(100% - 9.9px);
        border-top-color: ${pr=>pr.Color || '#ff5722'};
        border-radius: 50%;
        -webkit-animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;
        animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;
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

export const LoaderWrapper = styled.div<Props>`
    ${pr => pr.disabled === true?'pointer-events: none;opacity: 0.4;':''}
    display: ${pr=>pr.visible?'inline-block':'none'};
`;

export const StyledWrapper = styled.div<Props>`
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
