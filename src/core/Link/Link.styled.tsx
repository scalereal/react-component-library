import { defaultTheme } from '../../theme/theme';
import styled from "styled-components"

export const LinkStyled = styled('a')`
    color: ${defaultTheme.linkColor};
    background-color: transparent;
    text-decoration: none;

    &:active {
        color: ${defaultTheme.linkActiveColor};
    }

    &:hover {
        color: ${defaultTheme.linkHoverColor};
        text-decoration: underline;
        outline-width: 0;
        cursor: pointer;
    }
`;
