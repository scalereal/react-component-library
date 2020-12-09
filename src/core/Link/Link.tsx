import React, { FC, PropsWithChildren } from 'react';
import Text from '../Text/Text';
import * as Styled from './Link.styled';
import { LinkProps } from './types';

export const Link: FC<LinkProps> = ({ href, children, ...props }:PropsWithChildren<LinkProps>) =>{
    const isValidStringOrNumber = (e: any) => typeof e === 'string' || typeof e === 'number';
        return (
            <Styled.LinkStyled href={href} {...props}>
                {React.Children.map(children, c => {
                    return isValidStringOrNumber(c) ? <Text>{c}</Text> : c;
                })}
            </Styled.LinkStyled>
        );
}
export default Link