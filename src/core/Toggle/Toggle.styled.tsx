import styled from 'styled-components';
import { ToggleProps, ToggleWrapperProps } from './types';
import { toggleTheme } from "../../theme/core/toggle"

const getHeight = ({ size }: ToggleProps) => (toggleTheme.sizes[size]);
const getWidth = (props: ToggleProps) => `calc(${getHeight(props)} * 2)`;


export const ToggleWrapper = styled('div')<ToggleWrapperProps>`
    position: relative;
    width: ${getWidth};
    height: ${getHeight};
    border-radius: 15px;

    &:focus-within {
        box-shadow: 0 0 0 1pt ${toggleTheme.borderColor};
    }

    & > * {
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }
`;
export const Circle = styled('div')<ToggleWrapperProps>`
    z-index: 1;
    position: absolute;
    background-color: ${toggleTheme.backgroundColor};

    &::after {
        content: '';
        margin: 3px;
        display: block;
        border-radius: 50%;
        background: ${toggleTheme.borderColor};
        transition: 0.2s;
        width: ${props => `calc(${getHeight(props)} - 6px) `};
        height: ${props => `calc(${getHeight(props)} - 6px) `};
    }
`;

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
