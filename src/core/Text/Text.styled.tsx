import styled, { css } from 'styled-components';
import { defaultTheme } from '../../theme';
import { TextProps } from './types';

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
        color: ${({ theme }) => (textColor ? textColor : theme.text.defaults.textColor)};
        line-height: ${({ theme }) => (lineHeight ? lineHeight : theme.text.defaults.lineHeight)};
        font-size: ${({ theme }) => (textSize === undefined ? theme.text.defaults.size :theme.text.sizes[textSize].fontSize)};
        text-align: ${({ theme }) => (textAlign ? textAlign : theme.text.defaults.textAlign)};
        font-weight: ${({ theme })=> (textWeight ? theme.text.weights[textWeight].weight : theme.text.defaults.textWeight)};
        font-family: ${({ theme }) => (theme.text.fontFamily)};
    `;
};

export const Text = styled('span')<TextProps>`
    padding:0.3rem;
    ${getTextStyle}
    ${props => props.uppercase && uppercase()};
    ${props => props.lineThrough && lineThrough()};
    &:active {
        color: ${({ theme, activeColor }) => (activeColor ? activeColor : theme.text.defaults.activeColor)};
    }
    ${props => props.hoverEffect? `&:hover {
        color: ${props.hoverColor ? props.hoverColor : props.theme.text.defaults.hoverColor};
    }`:''
    };
    /* &:hover {
        color: ${({ theme, hoverColor }) => (hoverColor ? hoverColor : theme.text.defaults.hoverColor)};
    } */
`;

Text.displayName = "Text";
Text.defaultProps = {
    theme:defaultTheme
}
