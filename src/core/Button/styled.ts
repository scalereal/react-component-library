import styled from 'styled-components';
import { defaultTheme } from "../../theme/theme";
import { Props } from './types';


const SizeMixin = (size:any) => {
    switch (size) {
        case "XS":
            return `padding: 0.6rem 2.4rem 0.8rem;
            `;
        case "S":
          return `padding: 0.8rem 2.4rem 1rem;
            `;
        
        case "M":
            return `padding: 1rem 2.4rem 1.2rem;
           `;

        case "L":
            return `padding: 1.2rem 2.4rem 1.4rem;
            `;
        
        case "XL":
        return `padding: 1.4rem 2.4rem 1.6rem;
        `;

      default:
        return `border:1px solid red;`;
     }
};


const hoverPick = (pr:Props) => {
    switch (pr.type) {
        case "primary":{
            return `background: ${defaultTheme.primaryColor};
            border:none;
            color:${ pr.textColor || defaultTheme.whiteColor};
            ${pr.hoverEffect?`&:hover {
                background-color: ${pr.hoverBgColor || defaultTheme.primaryActiveColor};
                box-shadow: 0px 5px 8px ${pr.hoverShadowColor || defaultTheme.shadowColor };
                color:${pr.hoverTextColor || defaultTheme.whiteColor };
                };`:''}
            `};

        case "secondary":
          return `background:transparent;
            border:1px solid ${defaultTheme.secondaryColor};
            color:${pr.textColor || defaultTheme.secondaryActiveColor};
            ${pr.hoverEffect?`&:hover {
            border:1px solid ${defaultTheme.secondaryActiveColor};
            box-shadow: 0px 5px 8px ${pr.hoverShadowColor || defaultTheme.shadowColor };
            color:${pr.hoverTextColor || defaultTheme.secondaryActiveColor };
            };`:''}
            `;
        
        case "warning":
            return `
            background: ${defaultTheme.warningColor};
            border:none;
            color:${pr.textColor || defaultTheme.whiteColor};
            ${pr.hoverEffect?`&:hover {
                background-color: ${pr.hoverBgColor || defaultTheme.warningActiveColor};
                box-shadow: 0px 5px 8px ${pr.hoverShadowColor || defaultTheme.shadowColor };
                color:${pr.hoverTextColor || defaultTheme.whiteColor };
                };`:''}
           `;

        case "danger":
            return `background: ${defaultTheme.dangerColor};
            border:none;
            color:${pr.textColor || defaultTheme.whiteColor};
            ${pr.hoverEffect?`&:hover {
                background-color: ${pr.hoverBgColor || defaultTheme.dangerActiveColor};
                box-shadow: 0px 5px 8px ${pr.hoverShadowColor || defaultTheme.shadowColor };
                color:${pr.hoverTextColor || defaultTheme.whiteColor };
                };`:''}
            `;
        
        case "success":
        return `background: ${defaultTheme.successColor};
        border:none;
        color:${pr.textColor || defaultTheme.whiteColor};
        ${pr.hoverEffect?`&:hover {
            background-color: ${pr.hoverBgColor || defaultTheme.successActiveColor};
            box-shadow: 0px 5px 8px ${pr.hoverShadowColor || defaultTheme.shadowColor };
            color:${pr.hoverTextColor || defaultTheme.whiteColor };
            };`:''}
        `;

      default:
        return `background: ${defaultTheme.primaryColor};
        border:none;
        color:${pr.textColor || defaultTheme.whiteColor};
        ${pr.hoverEffect?`&:hover {
            background-color: ${pr.hoverBgColor || defaultTheme.primaryActiveColor};
            box-shadow: 0px 5px 8px ${pr.hoverShadowColor || defaultTheme.shadowColor };
            color:${pr.hoverTextColor || defaultTheme.whiteColor };
            };`:''}`;
    }
 };

export const StyledButton = styled.button<Props>`
    ${pr => pr.disabled === true?'pointer-events: none;opacity: 0.4;':''};
    ${pr=>  SizeMixin(pr.size)};
    ${pr => hoverPick(pr)};
    font-size: 20px;
    border-radius: 0.5rem;
    text-align:center;
    position: relative;
    user-select: none;
    font-family: inherit;
    text-decoration: none;
    transition: all 100ms ease-out 0s;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`;