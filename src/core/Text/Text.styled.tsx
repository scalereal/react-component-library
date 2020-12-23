import styled,{ css } from "styled-components"
import { TextProps } from './types';
import { textTheme } from "../../theme/core/text/index"

const uppercase = () => css`
    text-transform: uppercase;
`;
const lineThrough = () => css`
    text-decoration: line-through;
`;

const getTextStyle = ({ ...props }: TextProps) => {
    const { textColor, lineHeight, textSize, textAlign, textWeight } = props;
    return css`
        margin: 0;
        color: ${({ theme }) => (textColor ? textColor : theme.defaults.textColor)};
        line-height: ${({ theme }) => (lineHeight ? lineHeight : theme.defaults.lineHeight)};
        font-size: ${({ theme }) => (theme.sizes[textSize].fontSize)};
        text-align: ${({ theme }) => (textAlign ? textAlign : theme.defaults.textAlign)};
        font-weight: ${({ theme })=> (textWeight ? theme.weights[textWeight].weight : theme.defaults.textWeight)};
        font-family: ${({ theme }) => (theme.fontFamily)};
    `;
};

export const Text = styled('span')<TextProps>`
    ${getTextStyle}
    ${props => props.uppercase && uppercase()};
    ${props => props.lineThrough && lineThrough()};
    &:active {
        color: ${({ theme, activeColor }) => (activeColor ? activeColor : theme.defaults.activeColor)};
    }

    &:hover {
        color: ${({ theme, hoverColor }) => (hoverColor ? hoverColor : theme.defaults.hoverColor)};
    }
`;


Text.displayName = "Text";
Text.defaultProps = {
    theme:textTheme
}
