import styled,{ css } from "styled-components"
import { TextProps } from './types';
import textTheme from "../../theme/core/text/index"

const uppercase = () => css`
    text-transform: uppercase;
`;
const lineThrough = () => css`
    text-decoration: line-through;
`;

const getTextStyle = ({ ...props }: TextProps) => {
    const { textColor, lineHeight, textSize } = props
    return css`
        color: ${({ theme }) => (textColor ? textColor : theme.defaults.textColor)};
        line-height: ${({ theme }) => (lineHeight ? lineHeight : theme.defaults.lineHeight)};
        font-size: ${({ theme }) => theme.sizes[textSize].fontSize};
    `;
};

export const Text = styled('span')<TextProps>`
    ${getTextStyle}
    ${props => props.uppercase && uppercase()};
    ${props => props.lineThrough && lineThrough()};
`;


Text.displayName = "Text";
Text.defaultProps = {
    theme:textTheme
}
