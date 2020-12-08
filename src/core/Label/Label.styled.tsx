import styled,{ css } from "styled-components"
import { LabelProps } from './types';

const asterisk = () => css`
    ::after {
        color: red;
        content: ' *';
    }
`;

const getTextStyle = ({ ...props }: LabelProps) => {
    const { labelColor,  } = props
    
    return css`
        color: ${labelColor};
    `;
};

export const Label = styled('label')<LabelProps>`
    ${getTextStyle}
    ${({ required }) => required && asterisk()}
    cursor: ${({ showPointer }) => (showPointer === undefined ? 'default' : showPointer ? 'pointer' : 'not-allowed')};
`;
