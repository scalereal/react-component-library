import React, { FC } from 'react';
import Text from '../Text/Text';
import * as Styled from './Link.styled';
import { LinkProps,WithStyle } from './types';

const Link: FC<LinkProps> & WithStyle = React.memo(
    React.forwardRef(({ href, ...props }, ref) => {
        const isValidStringOrNumber = (e: any) => typeof e === 'string' || typeof e === 'number';
        return (
            <Styled.LinkStyled href={href} {...props} ref={ref}>
                {React.Children.map(props.children, c => {
                    return isValidStringOrNumber(c) ? <Text>{c}</Text> : c;
                })}
            </Styled.LinkStyled>
        );
    })
);

Link.displayName = 'Link';
Link.Style = Styled.LinkStyled;

export default Link;
