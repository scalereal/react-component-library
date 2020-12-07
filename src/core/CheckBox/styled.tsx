import styled from 'styled-components';
import { Props } from './types';

const mixin = (size:any) => {
    switch (size) {
        case "XS":
            return `width: 1.4rem;
            height: 1.4rem;
            label{

            }
            `;
        case "S":
            return `width: 1.8rem;
            height: 1.8rem;
            `;
        
        case "M":
            return `width: 2.2rem;
            height: 2.2rem;
            `;

        case "L":
            return `width: 2.6rem;
            height: 2.6rem;
            `;

        case "XL":
            return `width: 3rem;
            height: 3rem;
            `;
  
      default:
        return `border:1px solid red;`;
     }
 };

export const StyledCheckBoxInput = styled.input<Props>`
    margin:0.3rem;
    ${pr => pr.disabled === true?'pointer-events: none;opacity: 0.4;':''}
    ${pr=>  mixin(pr.size)}
    border-radius: 10%;
    text-align:center;
    background-color: ${pr => pr.bgColor || `#C4C4C4` };

    ${pr => pr.hoverEffect? `&:hover {
        background-color: ${pr.hoverBgColor || '#126AFA'};
        box-shadow: 0px 5px 8px ${pr.hoverShadowColor || '#004AD7' };
        }
        `:
        ''
    }
`;
export const StyledLabel = styled.label`
    display: inline-flex;
    cursor: pointer;
    padding: 0.8rem 0px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
    span{
        cursor: inherit;
        color: inherit;
        padding: 0px 1.6rem;
    }
`;