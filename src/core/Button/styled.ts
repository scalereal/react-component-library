import styled from 'styled-components';
import { buttonTheme } from '../../theme/core/button';
import { defaultTheme } from '../../theme/theme';
import { ButtonEdges, ComponentSize, Props } from './types';

const SizeMixin = (size: ComponentSize) => {
    switch (size) {
        case 'XS':
            return `padding: 0.6rem 1.6rem 0.6rem;
            `;
        case 'S':
            return `padding: 0.8rem 2.4rem 0.8rem;
            `;

        case 'M':
            return `padding: 1rem 2.4rem 1rem;
           `;

        case 'L':
            return `padding: 1.2rem 2.4rem 1.2rem;
            `;

        case 'XL':
            return `padding: 1.4rem 2.4rem 1.4rem;
        `;

        default:
            return `border:1px solid red;`;
    }
};

const buttonEdges = (size: ButtonEdges) => {
    switch (size) {
        case 'squared':
            return `border-radius: 0.5rem;
            `;
        case 'rounded':
            return `border-radius: 100rem;
            `;

        case 'circle':
            return `border-radius: 50%;
           `;

        default:
            return `border-radius: 50%;`;
    }
};

const hoverPick = (pr: Props) => {
    switch (pr.type) {
        case 'primary': {
            return `background: ${pr.bgColor || buttonTheme.primary.bgColor};
            border:none;
            span{color:${pr.textColor || buttonTheme.defaults.textColor};};
            ${
                pr.hoverEffect
                    ? `&:hover {
                background-color: ${pr.hoverBgColor || buttonTheme.primary.hoverBgColor};
                box-shadow: 0px 5px 8px ${pr.hoverShadowColor || buttonTheme.defaults.hoverShadowColor};
                span{color:${pr.hoverTextColor || defaultTheme.whiteColor};};
                };`
                    : ''
            }
            `;
        }

        case 'secondary':
            return `background:transparent;
            border:1px solid ${defaultTheme.secondaryColor};
            span{color:${pr.textColor || defaultTheme.secondaryActiveColor};};
            ${
                pr.hoverEffect
                    ? `&:hover {
            border:1px solid ${defaultTheme.secondaryActiveColor};
            box-shadow: 0px 5px 8px ${pr.hoverShadowColor || defaultTheme.shadowColor};
            span{color:${pr.hoverTextColor || defaultTheme.secondaryActiveColor};};
            };`
                    : ''
            }
            `;

        case 'warning':
            return `
            background: ${pr.bgColor || defaultTheme.warningColor};
            border:none;
            span{color:${pr.textColor || defaultTheme.whiteColor};};
            ${
                pr.hoverEffect
                    ? `&:hover {
                background-color: ${pr.hoverBgColor || defaultTheme.warningActiveColor};
                box-shadow: 0px 5px 8px ${pr.hoverShadowColor || defaultTheme.shadowColor};
                span{color:${pr.hoverTextColor || defaultTheme.whiteColor};};
                };`
                    : ''
            }
           `;

        case 'danger':
            return `background: ${pr.bgColor || defaultTheme.dangerColor};
            border:none;
            span{color:${pr.textColor || defaultTheme.whiteColor};}
            ${
                pr.hoverEffect
                    ? `&:hover {
                background-color: ${pr.hoverBgColor || defaultTheme.dangerActiveColor};
                box-shadow: 0px 5px 8px ${pr.hoverShadowColor || defaultTheme.shadowColor};
                span{color:${pr.hoverTextColor || defaultTheme.whiteColor};};
                };`
                    : ''
            }
            `;

        case 'success':
            return `background: ${pr.bgColor || defaultTheme.successColor};
        border:none;
        span{color:${pr.textColor || defaultTheme.whiteColor};};
        ${
            pr.hoverEffect
                ? `&:hover {
            background-color: ${pr.hoverBgColor || defaultTheme.successActiveColor};
            box-shadow: 0px 5px 8px ${pr.hoverShadowColor || defaultTheme.shadowColor};
            span{color:${pr.hoverTextColor || defaultTheme.whiteColor};};
            };`
                : ''
        }
        `;

        default:
            return `background: ${pr.bgColor || defaultTheme.primaryColor};
        border:none;
        span{color:${pr.textColor || defaultTheme.whiteColor};};
        ${
            pr.hoverEffect
                ? `&:hover {
            background-color: ${pr.hoverBgColor || defaultTheme.primaryActiveColor};
            box-shadow: 0px 5px 8px ${pr.hoverShadowColor || defaultTheme.shadowColor};
            span{color:${pr.hoverTextColor || defaultTheme.whiteColor};};
            };`
                : ''
        }`;
    }
};

export const StyledButton = styled.button<Props>`
    ${pr => (pr.disabled ? 'pointer-events: none;opacity: 0.4;' : '')};
    ${pr => pr.fullWidth && 'width:100%;'}
    ${pr => pr.size && SizeMixin(pr.size)};
    ${pr => hoverPick(pr)};
    margin: 0.5rem;
    ${pr => pr.edges && buttonEdges(pr.edges)}
    text-align: center;
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
    span {
        padding: 0;
    }
`;
