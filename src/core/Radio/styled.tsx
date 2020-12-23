import styled from 'styled-components';
import { defaultTheme } from '../../theme/theme';
import { RadioProps } from './types';

const mixin = (size:any) => {
    switch (size) {
        case "XS":
            return `padding: 0 2rem;
            span{
                width: 1rem;
                height: 1rem;
                &:after {
                    width: 0.6rem;
                    height: 0.6rem;
                    top: 3px;
                    left: 3px;
                }
            }
            `;
        case "S":
            return `padding: 0 2rem;
            span{
                width: 1.4rem;
                height: 1.4rem;
                &:after {
                    width: 1rem;
                    height: 1rem;
                    top: 3px;
                    left: 3px;
                }
            }
            `;
        
        case "M":
            return `padding: 0.2rem 3rem;
            span{
                width: 1.8rem;
                height: 1.8rem;
                &:after {
                    width: 1.4rem;
                    height: 1.4rem;
                    top: 3.3px;
                    left: 3.3px;
                }
            }
            `;

        case "L":
            return `padding: 0.25rem 4rem;
            span{
                width: 2rem;
                height: 2rem;
                &:after {
                    width: 1.6rem;
                    height: 1.6rem;
                    top: 3px;
                    left: 3px;
                }
            }
            `;

        case "XL":
            return `padding: 0.5rem 4rem;
            span{
                width: 2.4rem;
                height: 2.4rem;
                &:after {
                    width: 2rem;
                    height: 2rem;
                    top: 3px;
                    left: 3px;
                }
            }
            `;
     }
 };
export const ErrorLabel = styled.label`
    display:block;
    color: ${defaultTheme.statusColors.danger};
`;

export const StyledLabel = styled.label<RadioProps>`
    display: inline-block;
    position:relative;
    cursor: pointer;
    margin:1rem 0;
    align-items: center;
    justify-content: flex-end;
    font-size: 20px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color:${pr=>pr.labelColor|| defaultTheme.typographyColor };
    ${pr => pr.disabled === true?'pointer-events: none;opacity: 0.4;':''}

    span{
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${pr=>pr.bgColor||'#eeeeee'};
        border-radius: 50%;
        ${pr => (pr.hasError || pr.errorText!=='')?`border:1px solid ${defaultTheme.statusColors.danger}`:''};

        &:after {
            content: "";
            position: absolute;
            display: none;
            border-radius: 50%;
            background: #eeeeee;
        }

    }

    ${pr => pr.hoverEffect? `&:hover span {
        background-color: #999999;
        }`:''
    }

    input{
        position: absolute;
        opacity: 0;
        cursor: pointer;
        &:checked ~ span {
            
            &:after {
                display: block;
                background-color: ${defaultTheme.primaryColor};
            }
        }
    }
    ${pr=>  mixin(pr.size)}
        
`;
