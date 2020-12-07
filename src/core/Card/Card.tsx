import React,{ FC } from 'react'
import * as Styled from "./Card.styled"
import { CardProps } from './types';

const Toast:FC<CardProps> = ({ src, title, message } : CardProps) => {
    return (
        <Styled.Card>
            <Styled.CardHeader>
                <Styled.CardImage src={src}/>
            </Styled.CardHeader>
            <Styled.CardBody>
              <Styled.CardTitle>
                     {title}
              </Styled.CardTitle>
              <Styled.CardMessage>
                  {message}
              </Styled.CardMessage>
            </Styled.CardBody>
        </Styled.Card>
    )
}

export default Toast
