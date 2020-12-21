import styled,{ css } from 'styled-components';
import { ListProps } from './types';
import { spacingTheme } from "../../theme/core/list/index"
import { SpacingTheme } from "../../theme/core/list/types"

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

export const ListStyled = styled('ul').attrs(({ theme: spacings  }) => ({ spacings }))<ListProps>`
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
    flex-direction: ${({ variant }) => (variant === 'horizontal' ? 'row' : 'column')};
    ${({ spacings, variant }) => variant === 'horizontal' && horizontal(spacings)};
    ${({ spacings, variant }) => variant === 'vertical' && vertical(spacings)};
`;

ListStyled.defaultProps = {
    theme:spacingTheme
}