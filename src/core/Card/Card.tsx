import React,{ FC } from 'react'
import * as Styled from "./Card.styled"
import { CardProps } from './types';

const Toast:FC<CardProps> = ({ src, title, description, direction, align} : CardProps) => {

    return (
        <Styled.Card title={title} description={description} direction={direction} align={align}>
            <Styled.CardHeader title={title} description={description} direction={direction} align={align}>
                <Styled.CardImage src={src}/>
            </Styled.CardHeader>
            <Styled.CardBody title={title} description={description} direction={direction} align={align}>
              <Styled.CardTitle>
                     {title}
              </Styled.CardTitle>
              <Styled.CardDescription>
                  {description}
              </Styled.CardDescription>
            </Styled.CardBody>
        </Styled.Card>
    )
}

export default Toast
