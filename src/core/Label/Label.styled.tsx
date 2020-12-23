import styled,{ css } from "styled-components"
import { LabelProps } from './types';
import { labelTheme } from "../../theme/core/label/index"

const asterisk = () => css`
    ::after {
        color: red;
        content: ' *';
    }
`;
const uppercase = () => css`
    text-transform: uppercase;
`;
const getTextStyle = ({ ...props }: LabelProps) => {
    const { labelColor, lineHeight, labelSize, labelWeight } = props;
    return css`
        margin: 0;
        color: ${({ theme }) => (labelColor ? labelColor : theme.defaults.labelColor)};
        line-height: ${({ theme }) => (lineHeight ? lineHeight : theme.defaults.lineHeight)};
        font-size: ${({ theme }) => (theme.sizes[labelSize].fontSize)};
        font-weight: ${({ theme })=> (labelWeight ? theme.weights[labelWeight].weight : theme.defaults.labelWeight)};
        font-family: ${({ theme }) => (theme.fontFamily)};
    `;
};

export const Label = styled('label')<LabelProps>`
    ${getTextStyle}
    ${({ required }) => required && asterisk()}
    ${props => props.uppercase && uppercase()};
    cursor: ${({ showPointer }) => (showPointer === undefined ? 'default' : showPointer ? 'pointer' : 'not-allowed')};
`;
Label.displayName = "Label"
Label.defaultProps = {
    theme:labelTheme,
}
