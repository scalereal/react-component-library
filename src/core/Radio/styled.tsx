import styled from 'styled-components';
import { radioTheme } from '../../theme/core/radio';
import { Props } from './types';


export const RadioSpan = styled.span<Props>`
    /* position: absolute;
    top: 0;
    left: 0; */
    position: relative;
    text-align:center;
    background-color: ${pr=>pr.bgColor|| radioTheme.defaults.bgColor};
    border-radius: 50%;
    ${pr => (pr.hasError || pr.errorText!=='')?`border:1px solid ${radioTheme.defaults.errorTextColor}`:''};

    &:after {
        content: "";
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
        border-radius: 50%;
    }

`;


export const ErrorLabel = styled.label`
    display:block;
    color: ${radioTheme.defaults.errorTextColor};
    padding:0.5rem 0;
`;

const mixin = (size:any) => {
    switch (size) {
        case "XS":
            return `
            ${RadioSpan}{
                width: 1rem;
                height: 1rem;
                &:after {
                    width: 0.5rem;
                    height: 0.5rem;
                }
            }
            `;
        case "S":
            return `
            ${RadioSpan}{
                width: 1.4rem;
                height: 1.4rem;
                &:after {
                    width: 0.8rem;
                    height: 0.8rem;
                }
            }
            `;
        
        case "M":
            return `
            ${RadioSpan}{
                width: 1.8rem;
                height: 1.8rem;
                &:after {
                    width: 1.2rem;
                    height: 1.2rem;
                }
            }
            `;

        case "L":
            return `
            ${RadioSpan}{
                width: 2rem;
                height: 2rem;
                &:after {
                    width: 1.4rem;
                    height: 1.4rem;
                }
            }
            `;

        case "XL":
            return `
            ${RadioSpan}{
                width: 2.4rem;
                height: 2.4rem;
                &:after {
                    width: 1.8rem;
                    height: 1.8rem;
                }
            }
            `;
     }
};


const labelPos = (position:any) => {
    switch(position){
        case "top":
            return `flex-direction:column;
            align-items: flex-start;
            .radioLabel{
                    padding:0.5rem 0;
                }
                
            `;
        case "bottom":
            return `flex-direction:column-reverse;
            align-items: flex-start;
            .radioLabel{
                    padding:0.5rem 0;
                }
            `;
        case "left":
            return `flex-direction:row;
            justify-content:flex-start;
            .radioLabel{
                padding-right:1.6rem;
                padding-left:0;
            }
            `;
        default:
            return `.radioLabel{
                padding-left:1.3rem;
            }
            `;
    };
};

export const StyledLabel = styled.label<Props>`
    display: flex;
    position:relative;
    cursor: pointer;
    /* margin:1rem 0; */
    align-items: center;
    flex-direction:row-reverse;
    justify-content: flex-end;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color:${pr=>pr.labelColor|| radioTheme.defaults.textColor };
    ${pr => pr.disabled === true?'pointer-events: none;opacity: 0.4;':''}

    input{
        position: absolute;
        opacity: 0;
        cursor: pointer;
        &:checked ~ ${RadioSpan} {
            &:after {
                display: block;
                background-color: ${pr=>pr.checkedBgColor || radioTheme.defaults.checkedBgColor};
            }
        }
    }

    ${pr => pr.hoverEffect? `&:hover{ 
        ${RadioSpan} {
            background-color: ${pr.hoverBgColor || radioTheme.defaults.hoverBgColor};
        }; 
        input:checked ~ ${RadioSpan}:after{
            background-color: ${pr.hoverCheckedBgColor || radioTheme.defaults.hoverCheckedBgColor};
        };
        ${pr.labelHoverEffect?`.radioLabel{
            color:${pr.hoverLabelColor};
        }`:''
        } 
    };`:''
    }

    ${pr=>  mixin(pr.size)}
    ${pr=> labelPos(pr.labelPosition) };

`;

export const RadioWrapper = styled.div`

`;