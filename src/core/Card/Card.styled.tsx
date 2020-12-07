
import styled from "styled-components"
import { CardProps } from './types';
import { defaultTheme } from "../../theme/theme"

export const Card = styled('div')<CardProps>`
    display: flex;
    flex-direction:column;
    border: 1px solid ${defaultTheme.shadowColor};
    border-radius: 3px;
    max-width:20rem;
    box-shadow: 0 0.5rem 2rem ${defaultTheme.shadowColor};
    width:16rem;
    height:100%;
`;
export const CardHeader = styled('div')`
    background-color:#fff;
`;
export const CardImage = styled('img')`
    width:100%;
    height:100%;
`;
export const CardTitle = styled('div')`
    font-size:1.2em;
    color: ${defaultTheme.typographyColor};
`;
export const CardBody = styled('div')`
    padding:0.9rem 0.8rem;
    background-color:#fff;
    height:100%;
`;
export const CardMessage = styled('div')`
    font-size:1em;
    color: ${defaultTheme.typographyColor};
    padding:5px 0;
`;

