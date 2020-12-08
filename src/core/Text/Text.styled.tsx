import styled,{ css } from "styled-components"
import { TextProps } from './types';

const uppercase = () => css`
    text-transform: uppercase;
`;
const lineThrough = () => css`
    text-decoration: line-through;
`;

const getTextStyle = ({ ...props }: TextProps) => {
    const { textColor } = props

    return css`
        color: ${textColor};
    `;
};

export const Text = styled('span')<TextProps>`
    ${getTextStyle}
    ${props => props.uppercase && uppercase()};
    ${props => props.lineThrough && lineThrough()};
`;
