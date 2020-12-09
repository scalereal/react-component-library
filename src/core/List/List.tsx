import React, { FC, PropsWithChildren } from 'react';
import * as Styled from "./List.styled"
import { ListProps } from './types';

export const List: FC<ListProps> = ({variant,children}:PropsWithChildren<ListProps>) => {
    return(
        <Styled.ListStyled variant={variant}>
            {React.Children.map(children, (c, i) => {
                return <li key={i}>{c}</li>;
            })}
        </Styled.ListStyled>
    )
}
export default List

