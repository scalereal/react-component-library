import styled from 'styled-components';
import { Props } from './types';

// export const ErrorLabel = styled.label<Props>`
//     display:block;
//     color: ${defaultTheme.statusColors.danger}
// `;

// export const StyledLabel = styled.label<Props>`
//     display: inline-flex;
//     cursor: pointer;
//     padding: 0.8rem 0px;
//     align-items: center;
//     justify-content: flex-end;
//     user-select: none;
//     ${pr => pr.disabled === true?'pointer-events: none;opacity: 0.4;':''}
//     span{
//         margin: 0px;
//         color: inherit;
//         font-size: 1.4rem;
//         font-weight: 400;
//         letter-spacing: 0rem;
//         line-height: 2.2rem;
//         text-align: initial;
//         padding: 0px 1.6rem;    
//         }

//     input[type="checkbox"] {
//         border: 1px solid ${pr => pr.hasError?'#CC0000': defaultTheme.borderColor };
//         -webkit-appearance: none;
//         -webkit-transition: box-shadow 200ms;
        
//         ${pr => pr.hoverEffect? `&:hover {
//             input[type="checkbox"]:checked{
//                 background-color: ${pr.hoverBgColor || defaultTheme.primaryActiveColor}
//                 };
//             border-color:${defaultTheme.primaryColor};
//             box-shadow: 0px 4px 19px ${pr.hoverShadowColor || defaultTheme.shadowColor};
//             }
//             `:
//             ''
//             } 
//     }

//     /* border radius for checkbox */
//     input[type="checkbox"] {
//         -webkit-border-radius:5px;
//         border-radius:5px;
//     }

//     /* focus state */
//     input[type="checkbox"]:focus {
//         outline:none;
//     }

//     /* input checked border color */
//     input[type="checkbox"]:checked {
//         background-color: ${pr => pr.hasError?'#CC0000': defaultTheme.primaryColor };
//     }

//     input[type="checkbox"]:checked:before {
//         content: '';
//         display: block;
//         border: solid #fff;
//         -webkit-transform: rotate(45deg);
//         transform: rotate(45deg);
//         margin:auto;
//     }
//     ${pr=>  mixin(pr.size)}
        
// `;

export const StyledLi = styled.li`
    width:auto;
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

