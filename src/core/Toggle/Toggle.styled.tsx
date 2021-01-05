import styled from 'styled-components';
import { toggleTheme } from '../../theme/core/toggle';
import { ToggleProps, ToggleWrapperProps } from './types';

const getHeight = ({ theme, size}: ToggleProps) => (theme?.toggle?.sizes[size]);
const getWidth = (props: ToggleProps) => `calc(${getHeight(props)} * 2)`;

export const ToggleWrapper = styled('div')<ToggleWrapperProps>`
    position: relative;
    width: ${getWidth};
    height: ${getHeight};
    border-radius: 15px;

    &:focus-within {
        box-shadow: 0 0 0 1pt ${({ theme }) => (theme.borderColor)};
    }

    & > * {
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }
`;
ToggleWrapper.defaultProps = {
    theme: toggleTheme
};

export const Circle = styled('div')<ToggleWrapperProps>`
    z-index: 1;
    position: absolute;
    background-color: ${({ theme }) => theme.backgroundColor};

    &::after {
        content: '';
        margin: 3px;
        display: block;
        border-radius: 50%;
        background: ${({ theme }) => theme.borderColor};
        transition: 0.2s;
        width: ${props => `calc(${getHeight(props)} - 6px) `};
        height: ${props => `calc(${getHeight(props)} - 6px) `};
    }
`;
Circle.defaultProps = {
    theme: toggleTheme
};

export const Checkbox = styled('input').attrs({ type: 'checkbox' })<ToggleProps>`
    opacity: 0;
    z-index: 2;
    margin: 0;
    position: absolute;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: not-allowed;
        & + ${Circle} {
            background: ${toggleTheme.disabledBackgroundColor};
        }
    }

    &:checked + ${Circle} {
        background: ${toggleTheme.checkedBackgroundColor};
        &::after {
            margin-left: ${props => `calc(${getWidth(props)} - (${getHeight(props)}) + 3px) `};
        }
    }
`;
Checkbox.defaultProps = {
    theme: toggleTheme
}