import React, { FC } from 'react';
import { WithStyle } from "../../utils";
import Text from "../Text/Text";
import * as Styled from "./Card.styled";
import { CardProps } from './types';

const Card:FC<CardProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { title, description,imgSrc,titleSize, descriptionSize ,titleColor,descriptionColor} = props
        return (
            <Styled.Card ref={ref} {...props}>
                {
                    imgSrc && <Styled.CardHeader {...props}>
                                <Styled.CardImage src={imgSrc} />
                            </Styled.CardHeader>
                }
                <Styled.CardBody {...props}>
                    <Styled.CardTitle>
                        <Text textColor={titleColor} textSize={titleSize}>{title}</Text>
                    </Styled.CardTitle>
                    <Styled.CardDescription>
                        <Text textColor={descriptionColor} textSize={descriptionSize}>{description}</Text>
                    </Styled.CardDescription>
                </Styled.CardBody>
            </Styled.Card>
        );
    })
);

Card.defaultProps = {
   textAlignment: 'left',
   variant:'vertical'
};
Card.displayName = 'Card';
Card.Style = Styled.Card;

export default Card

