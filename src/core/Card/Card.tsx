import * as React from 'react'
import { WithStyle } from '../../utils'
import Text from '../Text/Text'
import * as Styled from './Card.styled'
import { CardProps } from './types'

export const variants : CardProps['variant'][]  = ['horizontal', 'vertical']
export const textAlignments : CardProps['textAlignment'][] = ['left', 'center', 'right']
export const textSizes : CardProps['titleSize'][] = ['XS', 'S', 'M', 'L', 'XL']
export const descriptionSizes : CardProps['descriptionSize'][] = ['XS', 'S', 'M', 'L', 'XL']

const Card:React.FC<CardProps> & WithStyle = React.memo(
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

