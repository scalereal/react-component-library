import styled from 'styled-components'
import { LinkProps } from './types'
import { defaultTheme } from '../../theme'

export const LinkStyled = styled('a')<LinkProps>`
    color: ${({ theme, linkColor }) => (linkColor ? linkColor : theme.link.defaults.linkColor)};
    background-color: transparent;
    text-decoration: none;
    font-size: ${({ theme, linkSize }) => (theme.link.sizes[linkSize].fontSize)};
    font-family: ${({ theme }) => (theme.link.fontFamily)};

    &:active {
        color: ${({ theme, activeColor }) => (activeColor ? activeColor : theme.link.defaults.activeColor)};
    }

    &:hover {
        color: ${({ theme, hoverColor }) => (hoverColor ? hoverColor : theme.link.defaults.hoverColor)};
        text-decoration: underline;
        outline-width: 0;
        cursor: pointer;
    }
`;

LinkStyled.defaultProps = {
    theme:defaultTheme
}