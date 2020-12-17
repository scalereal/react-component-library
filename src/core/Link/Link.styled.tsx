import styled from "styled-components"
import linkTheme from "../../theme/core/link/index"
import { LinkProps } from './types';

export const LinkStyled = styled('a')<LinkProps>`
    color: ${({ theme, linkColor }) => (linkColor ? linkColor : theme.defaults.linkColor)};
    background-color: transparent;
    text-decoration: none;
    font-size: ${({ theme, linkSize }) => (theme.sizes[linkSize].fontSize)};
    &:active {
        color: ${({ theme, activeColor }) => (activeColor ? activeColor : theme.defaults.activeColor)};
    }

    &:hover {
        color: ${({ theme, hoverColor }) => (hoverColor ? hoverColor : theme.defaults.hoverColor)};
        text-decoration: underline;
        outline-width: 0;
        cursor: pointer;
    }
`;

LinkStyled.defaultProps = {
    theme:linkTheme
}