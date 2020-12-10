
import styled from "styled-components"
import { CardProps } from './types';
import { defaultTheme } from "../../theme/theme"

export const Card = styled('div')<CardProps>`
    position: relative;
    display: flex;
    flex-direction: ${props => props.direction};
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid ${defaultTheme.shadowColor};
    border-radius: .3rem;
    box-shadow: 0 0.5rem 2rem ${defaultTheme.shadowColor};
    width:18rem;
    border-top-left-radius: calc(.3rem - 1px);
    border-top-right-radius: calc(.3rem - 1px);
    border-bottom-left-radius: calc(.3rem - 1px);
    border-bottom-right-radius: calc(.3rem - 1px);
`;
export const CardHeader = styled('div')<CardProps>`
    background-color:#fff;
    width:${props => props.direction==="column" ? 'auto':'10rem'};
`;
export const CardImage = styled('img')`
    width:100%;
    height:100%;
`;
export const CardTitle = styled('div')`
    font-size:1.2em;
    color: ${defaultTheme.typographyColor};
    margin-bottom: .5rem;
`;
export const CardBody = styled('div')<CardProps>`
    background-color:#fff;
    height:100%;
    width:${props => props.direction==="column" ? 'auto':'8rem'};
    text-align:${props => props.alignText};
    flex: 1 1 auto;
    padding: 1rem 1rem;
`;
export const CardDescription = styled('div')`
    font-size:1em;
    color: ${defaultTheme.typographyColor};
    margin-top: 0;
    margin-bottom: 0.5rem;
`;

