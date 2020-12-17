import styled,{ css } from "styled-components"
import { LabelProps } from './types';
import labelTheme from "../../theme/core/label/index"
const asterisk = () => css`
    ::after {
        color: red;
        content: ' *';
    }
`;

const getTextStyle = ({ ...props }: LabelProps) => {
    const { labelColor, labelSize } = props
    return css`
        color: ${({ theme }) => (labelColor ? labelColor : theme.defaults.labelColor)};
        font-size: ${({ theme }) => (theme.sizes[labelSize].fontSize)};
    `;
};

export const Label = styled('label')<LabelProps>`
    ${getTextStyle}
    ${({ required }) => required && asterisk()}
    cursor: ${({ showPointer }) => (showPointer === undefined ? 'default' : showPointer ? 'pointer' : 'not-allowed')};
    &:hover {
        color:${({ theme, hoverColor }) => (hoverColor ? hoverColor : theme.defaults.hoverColor)};
    }
`;
Label.displayName = "Label"
Label.defaultProps = {
    theme:labelTheme,
}
