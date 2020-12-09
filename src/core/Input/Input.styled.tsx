import styled,{css} from "styled-components"
import { InputProps } from './types';
import { defaultTheme } from "../../theme/theme"

const asterisk = () => css`
    ::after {
        color: red;
        content: ' *';
    }
`;

export const Wrapper = styled('div')<InputProps>`
    display: flex;
    &&& {
        flex-direction: row;
        align-items: center;
    }
    background-clip: padding-box;
    box-sizing: border-box;
    border: 1px solid ${defaultTheme.borderColor};
    border-radius: 5px;
    overflow: hidden;
    width: ${props => (props.fullWidth ? '100%' : 'max-content')};
    height: max-content;
    /* ${({ required }) => required && asterisk()} */

    &:focus-within {
        border-color: ${defaultTheme.borderColor};
    }

    & > * {
        font-size: 1rem;
        padding: 10px;
        color: ${defaultTheme.typographyColor};
    }
`;

export const Input = styled('input')<InputProps>`
    flex: 1;
    outline: 0;
    border: 0;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'inherit')};
    background-color: ${({ disabled }) => (disabled ? defaultTheme.inputDisabledColor : defaultTheme.inputBackgroundColor)};

    &::placeholder {
        color: ${defaultTheme.inputPlaceHolderColor};
    }

    &::-webkit-file-upload-button {
        visibility: hidden;
    }
`;

export const Prefix = styled('span')`
    background-color: ${defaultTheme.inputPreffixAndSuffixBackgroundColor};
`;

export const Suffix = styled('span')`
    background-color: ${defaultTheme.inputPreffixAndSuffixBackgroundColor};
`;
