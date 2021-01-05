import styled from 'styled-components'
import { CardProps } from './types'
import { defaultTheme } from '../../theme'

export const Card = styled('div')<CardProps>`
    position: relative;
    display: flex;
    flex-direction: ${({ variant }) => variant ===  "vertical" ? "column": "row" };
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid ${({ theme, borderColor }) => borderColor ? borderColor : theme.card.defaults.borderColor};
    border-radius: .3rem;
    box-shadow: 0 0.5rem 2rem ${({ theme, shadowColor }) => shadowColor ? shadowColor : theme.card.defaults.shadowColor};
    width:18rem;
    border-top-left-radius: calc(.3rem - 1px);
    border-top-right-radius: calc(.3rem - 1px);
    border-bottom-left-radius: calc(.3rem - 1px);
    border-bottom-right-radius: calc(.3rem - 1px);
`;

Card.defaultProps = {
    theme:defaultTheme
}

export const CardHeader = styled('div')<CardProps>`
    background-color:#fff;
    width:${({ variant }) => variant ===  "vertical" ? "auto": "10rem" };
`;
export const CardImage = styled('img')`
    width:100%;
    height:100%;
`;
export const CardTitle = styled('div')`
    margin-bottom: .5rem;
`;
export const CardBody = styled('div')<CardProps>`
    background-color:#fff;
    height:100%;
    width:${({ variant }) => variant ===  "vertical" ? "auto": "8rem" };
    text-align:${({ textAlignment }) => textAlignment};
    flex: 1 1 auto;
    padding: 1rem 1rem;
`;
export const CardDescription = styled('div')`
    margin-top: 0;
    margin-bottom: 0.5rem;
`;

