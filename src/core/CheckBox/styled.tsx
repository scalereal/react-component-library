import styled from 'styled-components';
import { defaultTheme } from "../../theme/theme";
import { Props } from './types';


const mixin = (size:any) => {
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
export const ErrorLabel = styled.label<Props>`
    display:block;
    color: ${defaultTheme.statusColors.danger}
`;

export const StyledLabel = styled.label<Props>`
    display: inline-flex;
    cursor: pointer;
    padding: 0.8rem 0px;
    align-items: center;
    justify-content: flex-end;
    user-select: none;
    ${pr => pr.disabled === true?'pointer-events: none;opacity: 0.4;':''}
    span{
        margin: 0px;
        color: inherit;
        font-size: 1.4rem;
        font-weight: 400;
        letter-spacing: 0rem;
        line-height: 2.2rem;
        text-align: initial;
        padding: 0px 1.6rem;    
        }

    input[type="checkbox"] {
        border: 1px solid ${pr => pr.hasError?'#CC0000': defaultTheme.borderColor };
        -webkit-appearance: none;
        -webkit-transition: box-shadow 200ms;
        
        ${pr => pr.hoverEffect? `&:hover {
            input[type="checkbox"]:checked{
                background-color: ${pr.hoverBgColor || defaultTheme.primaryActiveColor}
                };
            border-color:${defaultTheme.primaryColor};
            box-shadow: 0px 4px 19px ${pr.hoverShadowColor || defaultTheme.shadowColor};
            }
            `:
            ''
            } 
    }

    /* border radius for checkbox */
    input[type="checkbox"] {
        -webkit-border-radius:5px;
        border-radius:5px;
    }

    /* focus state */
    input[type="checkbox"]:focus {
        outline:none;
    }

    /* input checked border color */
    input[type="checkbox"]:checked {
        background-color: ${pr => pr.hasError?'#CC0000': defaultTheme.primaryColor };
    }

    input[type="checkbox"]:checked:before {
        content: '';
        display: block;
        border: solid #fff;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        margin:auto;
    }
    ${pr=>  mixin(pr.size)}
        
`;