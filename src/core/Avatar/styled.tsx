import styled from 'styled-components';
import { defaultTheme } from "../../theme/theme";
import { Props } from './types';


const mixin = (size:any) => {
    switch (size) {
        case "XS":
            return `width: 50px;
            height: 50px;
            line-height: 50px;
            img{width: 50px;
                height: 50px;
            }
            span{font-size:1.5em};
            `;
        case "S":
            return `width: 100px;
            height: 100px;
            line-height: 100px;
            img{width: 100px;
                height: 100px;
            }
            span{font-size:3.5em}`;
        
        case "M":
            return `width: 150px;
            height: 150px;
            line-height: 150px;
            img{
                width: 150px;
                height: 150px;
            }
            span{font-size:5em}`;

        case "L":
            return `width: 200px;
            height: 200px;
            line-height: 200px;
            img{
                width: 200px;
                height: 200px;
            }
            span{font-size:7em}`;
        
        case "XL":
            return `width: 250px;
            height: 250px;
            line-height: 250px;
            img{
                width: 250px;
                height: 250px;
            }
            span{font-size:9em}`;
  
      default:
        return `border:1px solid red;`;
     }
 };

export const StyledAvatar = styled.div<Props>`
    ${pr => pr.disabled === true?'pointer-events: none;opacity: 0.4;':''}
    ${pr=>  mixin(pr.size)}
    border-radius: 50%;
    text-align:center;
    background-color: ${pr => pr.bgColor || defaultTheme.secondaryColor };

    ${pr => pr.hoverEffect? `&:hover {
        background-color: ${pr.hoverBgColor || defaultTheme.primaryActiveColor};
        box-shadow: 0px 5px 8px ${pr.hoverShadowColor || defaultTheme.shadowColor };
        span{
            color: ${pr.hoverTextColor || defaultTheme.whiteColor};
            text-shadow: 0px 5px 8px ${pr.hoverTextShadowColor };
        }
        }
        `:
        ''
    }

    img{
        border-radius: 50%;
    }
    
    span{
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
        color: ${pr => pr.textColor || defaultTheme.primaryColor};
    }
`;