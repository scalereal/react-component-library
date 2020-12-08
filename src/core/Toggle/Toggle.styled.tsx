import styled from "styled-components"
import { toggleSizes } from "../../theme/sizes"
import { ToggleProps } from './types';
import { defaultTheme } from "../../theme/theme"

const getHeight = ({ size }: ToggleProps) => (size ? toggleSizes[size] : toggleSizes['M']);
const getWidth = (props: ToggleProps) => `calc(${getHeight(props)} * 2)`;

export const Wrapper = styled('div')<ToggleProps>`
    position: relative;
    width: ${getWidth};
    height: ${getHeight};
    border-radius: 15px;

    &:focus-within {
        box-shadow: 0 0 0 1pt ${defaultTheme.whiteColor};
    }

    & > * {
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }
`;
export const Circle = styled('div')<ToggleProps>`
    z-index: 1;
    position: absolute;
    background-color: ${defaultTheme.shadowColor};

    &::after {
        content: '';
        margin: 3px;
        display: block;
        border-radius: 50%;
        background: ${defaultTheme.whiteColor};
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
            background: ${defaultTheme.shadowColor};
        }
    }

    &:checked + ${Circle} {
        background: ${defaultTheme.blackColor};
        &::after {
            margin-left: ${props => `calc(${getWidth(props)} - (${getHeight(props)}) + 3px) `};
        }
    }
`;
