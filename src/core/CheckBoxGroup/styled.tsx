import styled from 'styled-components';
import { checkBoxTheme } from "../../theme/core/checkBox";
import { mixin } from '../CheckBox/styled';
import { Props } from './types';

export const StyledLi = styled.li`
    width:auto;
    padding-right:1.5rem;
`;

export const StyledUl = styled.ul<Props>`
    display:flex;
    flex-direction:row;
    margin:0;
    padding:0;
    list-style:none;
    ${pr => 
        pr.display==='block'? `flex-direction:column;${StyledLi}{
        width:100%;
        }`:''
    }
`;

export const StyledLabel = styled.label<Props>`
    cursor: pointer;
    padding: 0.8rem 0px;
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
        margin-right:0.5rem;
        
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
    ${ pr=> pr.size && mixin(pr.size) };
        
`;


