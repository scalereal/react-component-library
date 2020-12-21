import React,{ FC } from 'react'
import * as Styled from "./Card.styled"
import Text from "../Text/Text"
import { CardProps,WithStyle } from './types';

const Card:FC<CardProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { title, description, variant, textAlignment,imgSrc,shadowColor, borderColor,titleSize, descriptionSize ,titleColor,descriptionColor} = props
        return (
            <Styled.Card ref={ref} title={title} description={description} variant={variant} textAlignment={textAlignment} shadowColor={shadowColor} borderColor={borderColor} titleSize={titleSize} descriptionSize={descriptionSize}>
                {
                    imgSrc && <Styled.CardHeader title={title} description={description} variant={variant} textAlignment={textAlignment} shadowColor={shadowColor} borderColor={borderColor} titleSize={titleSize} descriptionSize={descriptionSize}>
                                <Styled.CardImage src={imgSrc} />
                            </Styled.CardHeader>
                }
                <Styled.CardBody title={title} description={description} variant={variant}  textAlignment={textAlignment} shadowColor={shadowColor} borderColor={borderColor} titleSize={titleSize} descriptionSize={descriptionSize}>
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

