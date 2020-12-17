import styled from 'styled-components';
import InjectClassName from '../../utils/InjectClassName/InjectClassName';
import { SvgLoaderProps } from './types';
import loaderTheme from "../../theme/loader/index"

export const SvgLoaderStyled = styled(InjectClassName)<SvgLoaderProps>`
    font-size: ${({ theme, size }) => theme.sizes[size] };
    * {
        fill: ${({ theme, color }) => color || theme.defaultColor};
    }
`;

SvgLoaderStyled.displayName = 'SvgLoader';
SvgLoaderStyled.defaultProps = {
    theme: loaderTheme
};
