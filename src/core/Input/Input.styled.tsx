import styled from "styled-components"
import { InputProps } from './types';
import inputTheme from "../../theme/core/input/index"


export const Wrapper = styled('div')<InputProps>`
    display: flex;
    &&& {
        flex-direction: row;
        align-items: center;
    }
    background-clip: padding-box;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.inputBorderColor};
    border-radius: 5px;
    overflow: hidden;
    width: ${props => (props.fullWidth ? '100%' : 'max-content')};
    height: max-content;

    &:focus-within {
        border-color: ${({ theme, borderColor }) => (borderColor ? borderColor : theme.inputBorderColor)};
    }

    & > * {
        font-size: 1rem;
        padding: 10px;
        color: ${({ theme, textColor }) => (textColor ? textColor : theme.inputTextColor)};
    }
`;
Wrapper.defaultProps = {
    theme: inputTheme
}

export const Input = styled('input')<InputProps>`
    flex: 1;
    outline: 0;
    border: 0;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'inherit')};
    background-color: ${({ disabled, theme, disabledColor, backgroundColor }) =>
        disabled
            ? disabledColor
                ? disabledColor
                : theme.inputDisabledColor
            : backgroundColor
            ? backgroundColor
            : theme.inputBackgroundColor};

    &::placeholder {
        color: ${({theme, placeHolderColor }) => placeHolderColor ? placeHolderColor : theme.inputPlaceHolderColor};
    }

    &::-webkit-file-upload-button {
        visibility: hidden;
    }
`;
Input.defaultProps = {
    theme: inputTheme
};

export const Prefix = styled('span')<InputProps>`
    background-color: ${({ theme, preffixBackgroundColor }) =>
        preffixBackgroundColor ? preffixBackgroundColor : theme.inputPreffixBackgroundColor};
`;
Prefix.defaultProps = {
    theme: inputTheme
};

export const Suffix = styled('span')<InputProps>`
    background-color: ${({ theme, suffixBackgroundColor }) =>
        suffixBackgroundColor ? suffixBackgroundColor : theme.inputSuffixBackgroundColor};
`;
Suffix.defaultProps = {
    theme: inputTheme
};