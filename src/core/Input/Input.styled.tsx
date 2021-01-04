import styled from 'styled-components'
import { InputProps } from './types'
import { defaultTheme } from '../../theme'

export const Wrapper = styled('div')<InputProps>`
    display: flex;
    &&& {
        flex-direction: row;
        align-items: center;
    }
    background-clip: padding-box;
    box-sizing: border-box;
    border: 1px solid ${({ theme, borderColor }) => (borderColor ? borderColor : theme.input.inputBorderColor)};
    border-radius: 5px;
    overflow: hidden;
    width: ${props => (props.fullWidth ? '100%' : 'max-content')};
    height: max-content;
    font-family: ${({ theme }) =>(theme.input.fontFamily)};
    &:focus-within {
        border-color: ${({ theme, borderColor }) => (borderColor ? borderColor : theme.input.inputBorderColor)};
    }
    & > * {
        font-size: 1rem;
        padding: 10px;
        font-family: ${({ theme }) =>(theme.input.fontFamily)};
        color: ${({ theme, textColor }) => (textColor ? textColor : theme.input.inputTextColor)};
    }
`;
Wrapper.defaultProps = {
    theme: defaultTheme
}

export const Input = styled('input')<InputProps>`
    flex: 1;
    outline: 0;
    border: 0;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'inherit')};
    font-family: ${({ theme }) =>(theme.fontFamily)};
    background-color: ${({ disabled, theme, disabledColor, backgroundColor }) =>
        disabled
            ? disabledColor
                ? disabledColor
                : theme.input.inputDisabledColor
            : backgroundColor
            ? backgroundColor
            : theme.input.inputBackgroundColor};
    &::placeholder {
        color: ${({theme, placeHolderColor }) => placeHolderColor ? placeHolderColor : theme.input.inputPlaceHolderColor};
        font-family: ${({ theme }) =>(theme.input.fontFamily)};
    }
    &::-webkit-file-upload-button {
        visibility: hidden;
    }
`;
Input.defaultProps = {
    theme: defaultTheme
};

export const Prefix = styled('span')<InputProps>`
    background-color: ${({ theme, preffixBackgroundColor }) =>
        preffixBackgroundColor ? preffixBackgroundColor : theme.input.inputPreffixBackgroundColor};

    font-family: ${({ theme }) =>(theme.input.fontFamily)};
`;
Prefix.defaultProps = {
    theme: defaultTheme
};

export const Suffix = styled('span')<InputProps>`
    background-color: ${({ theme, suffixBackgroundColor }) =>
        suffixBackgroundColor ? suffixBackgroundColor : theme.input.inputSuffixBackgroundColor};
    
    font-family: ${({ theme }) =>(theme.input.fontFamily)};
`;
Suffix.defaultProps = {
    theme: defaultTheme
};