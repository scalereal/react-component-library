import styled from 'styled-components';
import { defaultTheme } from '../../theme';
import { CardProps } from './types';

export const Card = styled('div')<CardProps>`
    cursor: pointer;
    overflow: auto;
    box-sizing: border-box;
    flex: 1 1 0%;
    display: inline-flex;
    flex-direction: ${({ variant }) => (variant === 'vertical' ? 'column' : 'row')};
    ${pr =>
        pr.disableBorder ? 'border:none;' : `border: 1px solid ${pr.borderColor ? pr.borderColor : pr.theme.card.defaults.borderColor};`}
    margin: 0.5rem;
    transition: all 100ms ease-out 0s;
    background-color: rgb(255, 255, 255);
    border-radius: 0.8rem;
    box-shadow: 0 0.2rem 0.8rem ${({ theme, shadowColor }) => (shadowColor ? shadowColor : theme.card.defaults.shadowColor)};
    justify-content: center;
    transition: all 100ms ease-out;
    &:hover {
        box-shadow: 0 0.2rem 0.8rem ${({ theme, shadowColor }) => (shadowColor ? shadowColor : theme.card.hover.shadowColor)};
    }
`;

Card.defaultProps = {
    theme: defaultTheme
};

export const CardHeader = styled('div')<CardProps>`
    background-color: #fff;
    width: ${({ variant }) => (variant === 'vertical' ? 'auto' : '10rem')};
`;
export const CardImage = styled('img')`
    width: 100%;
    height: 100%;
`;
export const CardTitle = styled('div')`
    margin-bottom: 0.5rem;
`;
export const CardBody = styled('div')<CardProps>`
    background-color: #fff;
    /* height: 100%; */
    /* width: ${({ variant }) => (variant === 'vertical' ? 'auto' : '8rem')}; */
    text-align: ${({ textAlignment }) => textAlignment};
    flex: 1 1 auto;
    padding: 1rem 1rem;
`;
export const CardDescription = styled('div')`
    margin-top: 0;
    margin-bottom: 0.5rem;
`;
