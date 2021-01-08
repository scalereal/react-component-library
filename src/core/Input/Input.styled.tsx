import styled from 'styled-components';
import { defaultTheme } from '../../theme';
import { InputProps } from './types';

export const OuterWrapper = styled('div')`
    display:flex;
    flex-direction:column;
`;
export const Error = styled('span')<InputProps>`
    font-size: 0.9rem;
    line-height: 1rem;
    white-space: initial;
    user-select: none;
    margin: 0.1rem 0.8rem;
    color:${({ theme }) => (theme.input.inputErrorColor)};
    font-family: ${({ theme }) =>(theme.input.fontFamily)};
`;
Error.defaultProps = {
    theme: defaultTheme
}
export const InputWrapper = styled('div')<InputProps>`
    display: flex;
    &&& {
        flex-direction: row;
        align-items: center;
        justify-content:center;
    }
    background-clip: padding-box;
    box-sizing: border-box;
    border: 2px solid ${({ theme, borderColor, hasError }) => (borderColor ? hasError ? theme.input.inputErrorColor: borderColor : hasError ? theme.input.inputErrorColor : theme.input.inputBorderColor)};
    border-radius: 3px;
    overflow: hidden;
    margin:0.5rem;
    width: ${({ fullWidth }) => (fullWidth ? '94.5%%' : 'max-content')};
    height: max-content;
    font-family: ${({ theme }) =>(theme.input.fontFamily)};
    &:focus-within {
        border-color: ${({ theme, borderColor, hasError}) => (borderColor ? hasError ? theme.input.inputErrorColor: borderColor : hasError ? theme.input.inputErrorColor : theme.input.inputFocusBorderColor)};
    }
    & > * {
        font-size: 1rem;
        padding: 10px;
        font-family: ${({ theme }) =>(theme.input.fontFamily)};
        color: ${({ theme, textColor }) => (textColor ? textColor : theme.input.inputTextColor)};
    }
`;
InputWrapper.defaultProps = {
    theme: defaultTheme
}

export const Input = styled('input')<InputProps>`
    flex: 1;
    outline: 0;
    border: 0;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'inherit')};
    font-family: ${({ theme }) =>(theme.input.fontFamily)};
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
`;
Input.defaultProps = {
    theme: defaultTheme
};

export const Preffix = styled('span')<InputProps>`
    background-color: ${({ theme, preffixBackgroundColor }) => (preffixBackgroundColor ? preffixBackgroundColor : theme.input.inputPreffixBackgroundColor)};
    font-family: ${({ theme }) => (theme.input.fontFamily)};
    color:${({ theme, preffixColor, hasError}) => (preffixColor ? hasError ? theme.input.inputErrorColor : preffixColor : hasError ? theme.input.inputErrorColor : theme.input.inputPreffixColor)};
`;
Preffix.defaultProps = {
    theme: defaultTheme
};

export const Suffix = styled('span')<InputProps>`
    background-color: ${({ theme, suffixBackgroundColor }) => (suffixBackgroundColor ? suffixBackgroundColor : theme.input.inputSuffixBackgroundColor)};
    font-family: ${({ theme }) => (theme.input.fontFamily)};
    color:${({ theme, suffixColor, hasError}) => (suffixColor ? hasError ? theme.input.inputErrorColor : suffixColor : hasError ? theme.input.inputErrorColor : theme.input.inputSuffixColor)};
`;
Suffix.defaultProps = {
    theme: defaultTheme
};