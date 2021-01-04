import styled,{ css } from 'styled-components'
import { ListProps } from './types'
import { defaultTheme } from '../../theme'
import { ListTheme } from '../../theme/core/list/types'

const horizontal = (spacings: ListTheme) => css`
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

const vertical = (spacings: ListTheme) => css`
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

export const ListStyled = styled('ul').attrs(({ theme: { list }  }) => ({ list }))<ListProps>`
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
    flex-direction: ${({ variant }) => (variant === 'horizontal' ? 'row' : 'column')};
    ${({ list, variant }) => variant === 'horizontal' && horizontal(list)};
    ${({ list, variant }) => variant === 'vertical' && vertical(list)};
`;

ListStyled.defaultProps = {
    theme:defaultTheme
}