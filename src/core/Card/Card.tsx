import React,{ FC } from 'react'
import * as Styled from "./Card.styled"
import { CardProps,WithStyle } from './types';

const Card:FC<CardProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) =>{
        const { title, description, direction, alignText, src } = props
        return (
            <Styled.Card ref={ref} title={title} description={description} direction={direction} alignText={alignText}>
                <Styled.CardHeader title={title} description={description} direction={direction} alignText={alignText}>
                    <Styled.CardImage src={src} />
                </Styled.CardHeader>
                <Styled.CardBody title={title} description={description} direction={direction} alignText={alignText}>
                    <Styled.CardTitle>{title}</Styled.CardTitle>
                    <Styled.CardDescription>{description}</Styled.CardDescription>
                </Styled.CardBody>
            </Styled.Card>
        );
    })
);

Card.defaultProps = {
    direction:'column'
};
Card.displayName = 'Card';
Card.Style = Styled.Card;

export default Card

