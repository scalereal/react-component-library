import styled from 'styled-components';
import { checkBoxTheme } from "../../theme/core/checkBox";
import { Props } from './types';


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const mixin = (size:string) =>{
    switch (size) {
        case "XS":
            return `input[type="checkbox"]{
                width: 1.4rem;
                height: 1.4rem;
                }
                input[type="checkbox"]:checked:before {
                    width: 4px;
                    height: 10px;
                    border-width: 0 3px 3px 0;
                    margin-top: 2px;
                }
            `;
        case "S":
            return `input{
                width: 1.8rem;
                height: 1.8rem;
                }
                input[type="checkbox"]:checked:before {
                    width: 5px;
                    height: 14px;
                    border-width: 0 3px 3px 0;
                    margin-top: 4px;
                }
            `;
        
        case "M":
            return `input{
                width: 2.2rem;
                height: 2.2rem;
                }
                input[type="checkbox"]:checked:before {
                    width: 7px;
                    height: 18px;
                    border-width: 0 4px 4px 0;
                    margin-top: 4px;
                }
            `;

        case "L":
            return `input{
                width: 2.6rem;
                height: 2.6rem;
                }
                input[type="checkbox"]:checked:before {
                    width: 7px;
                    height: 21px;
                    border-width: 0 5px 5px 0;
                    margin-top: 4px;
                }
            `;

        case "XL":
            return `input{
                width: 3rem;
                height: 3rem;
                }
                input[type="checkbox"]:checked:before {
                    width: 8px;
                    height: 24px;
                    border-width: 0 5.5px 5.5px 0;
                    margin-top: 4px;
                }
            `;
    }
};

 const labelpos = (position:any) => {
    switch(position){
        case "top":
            return `
                span{
                    display:block;
                    position:relative;
                    bottom:35px;
                }
                input{
                    position:relative;
                    top:35px;
                }
            `;
        case "bottom":
            return `span{
                display:block;
                width:100%;
                padding:0;
            }
            `;
        case "left":
            return `span{
                padding-right:1.6rem;
            }
            `;
        default:
            return `span{
                padding: 0px 1.6rem;
            }
            `;
    };
};

export const ErrorLabel = styled.label<Props>`
    display:block;
    color: ${checkBoxTheme.defaults.errorTextColor};
    padding-bottom:0.5rem;
    padding-left:0.3rem;
`;

export const StyledLabel = styled.label<Props>`
    ${pr=> pr.labelPosition==='left'?`display:flex;
            flex-direction:row-reverse;
            justify-content:flex-end;`:`display:block;`
    };
    cursor: pointer;
    padding-bottom: 0.5rem;
    user-select: none;
    ${pr => pr.disabled === true?'pointer-events: none;opacity: 0.4;':''};
    
    span{
        vertical-align:middle;
        };

    input[type="checkbox"] {
        vertical-align:middle;
        border: 1px solid ${pr => pr.errorText||pr.hasError?'#CC0000':checkBoxTheme.defaults.borderColor };
        -webkit-appearance: none;
        -webkit-transition: box-shadow 200ms;
        -webkit-border-radius:5px;
        border-radius:5px;
        
        &:focus {
            outline:none;
        };
        &:checked {
            background-color: ${pr => pr.hasError?'#CC0000': pr.bgColor || checkBoxTheme.defaults.bgColor };
            &:before {
                content: '';
                display: block;
                border: solid #fff;
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
                margin:auto;
            };
        };

    };
    ${pr => pr.hoverEffect? `&:hover {
        ${pr.labelHoverEffect?`span{color: ${pr.labelHoverColor};}`:''}
        input[type="checkbox"]:checked{
            background-color: ${pr.hoverBgColor || checkBoxTheme.defaults.hoverBgColor };
        };
        input[type="checkbox"]{
            border-color:${checkBoxTheme.defaults.bgColor};
            box-shadow: 0px 4px 19px ${pr.hoverShadowColor || checkBoxTheme.defaults.shadowColor };
            }
        }
        `:
        ''
    };
    ${pr=> pr.size && mixin(pr.size) };
    ${pr=> labelpos(pr.labelPosition) };
        
`;

export const CheckBoxWrapper = styled.div<Props>`

`;