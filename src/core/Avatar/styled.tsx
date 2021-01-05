import styled from 'styled-components';
import { avatarTheme } from '../../theme/core/avatar';
import { AvatarProps } from './types';


const mixin = (size:any) => {
    switch (size) {
        case "XXS":
            return `width: 30px;
            height: 30px;
            line-height: 30px;
            img{width: 30px;
                height: 30px;
            }
            span{font-size:0.8em};
            `;
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

export const StyledAvatar = styled.div<AvatarProps>`
    ${pr => pr.disabled === true?'pointer-events: none;opacity: 0.4;':''}
    ${pr=>  mixin(pr.size)}
    ${pr=> pr.display!=='block'?`display:${pr.display};`:`display:block;`};
    margin:0 0.5rem;
    border-radius: 50%;
    text-align:center;
    background-color: ${pr => pr.bgColor || avatarTheme.defaults.bgColor };

    ${pr => pr.hoverEffect? `&:hover {
        background-color: ${pr.hoverBgColor || avatarTheme.defaults.hoverBgColor };
        box-shadow: 0px 5px 8px ${pr.hoverShadowColor || avatarTheme.defaults.shadowColor };
        span{
            color: ${pr.hoverTextColor || avatarTheme.defaults.hoverTextColor };
            text-shadow: 0px 5px 8px ${pr.hoverTextShadowColor };
        }
        }
        `:
        ''
    }

    img{
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
    }
    
    span{
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
        color: ${pr => pr.textColor || avatarTheme.defaults.textColor };
    }
`;
