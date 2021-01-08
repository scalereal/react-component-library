import React, { FC } from 'react'
import { WithStyle } from '../../utils'
import Text from '../Text/Text'
import * as Styled from './Link.styled'
import { LinkProps } from './types'

export const linkSizes : LinkProps['linkSize'][] = ['XS', 'S', 'M', 'L', 'XL']

const Link: FC<LinkProps> & WithStyle = React.memo(
    React.forwardRef(({ href, linkSize, linkColor,hoverColor,activeColor, ...props }, ref) => {
        const isValidStringOrNumber = (e: any) => typeof e === 'string' || typeof e === 'number';
        return (
            <Styled.LinkStyled href={href} ref={ref} linkSize={linkSize} linkColor={linkColor} hoverColor={hoverColor} activeColor={activeColor} {...props}>
                {React.Children.map(props.children, c => {
                    return isValidStringOrNumber(c) ? <Text textSize={linkSize} textColor={linkColor}  hoverColor={hoverColor} activeColor={activeColor} hoverEffect={true}>{c}</Text> : c;
                })}
            </Styled.LinkStyled>
        );
    })
);

Link.displayName = 'Link';
Link.Style = Styled.LinkStyled;
Link.defaultProps = {
    linkSize: 'S'
}

export default Link;
