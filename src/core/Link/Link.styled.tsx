import styled from 'styled-components';
import { defaultTheme } from '../../theme';
import { LinkProps } from './types';

export const LinkStyled = styled('a')<LinkProps>`
    color: ${({ theme, linkColor }) => (linkColor ? linkColor : theme.link.defaults.linkColor)};
    background-color: transparent;
    text-decoration: none;
    cursor: pointer;
    font-size: ${({ theme, linkSize }) => (theme.link.sizes[linkSize].fontSize)};
    font-family: ${({ theme }) => (theme.link.fontFamily)};

    &:active {
        color: ${({ theme, activeColor }) => (activeColor ? activeColor : theme.link.defaults.activeColor)};
    }

    &:hover {
        color: ${({ theme, hoverColor }) => (hoverColor ? hoverColor : theme.link.defaults.hoverColor)};
        outline-width: 0;
    }
`;

LinkStyled.defaultProps = {
    theme:defaultTheme
}