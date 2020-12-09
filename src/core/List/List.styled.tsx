import styled,{ css } from 'styled-components';
import { ListProps } from './types';
import { SpacingTheme } from "../../theme/types"
import { spacing } from "../../theme/theme"

const horizontal = (spacings: SpacingTheme) => css`
    li {
        margin: 0 ${spacings.S1};
        &:last-child {
            margin-right: ${spacings.S2};
        }
        &:first-child {
            margin-left: ${spacings.S2};
        }
    }
`;

const vertical = (spacings: SpacingTheme) => css`
    li {
        margin: ${spacings.S1} 0;
        &:last-child {
            margin-bottom: ${spacings.S2};
        }
        &:first-child {
            margin-top: ${spacings.S2};
        }
    }
`;

export const ListStyled = styled('ul')<ListProps>`
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
    flex-direction: ${({ variant }) => (variant === 'horizontal' ? 'row' : 'column')};
    ${({ variant }) => variant === 'horizontal' && horizontal(spacing)};
    ${({ variant }) => variant === 'vertical' && vertical(spacing)};
`;

