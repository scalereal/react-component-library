import * as React from 'react';
import { WithStyle } from '../../utils';
import * as Styled from './List.styled';
import { ListProps } from './types';

export const variant: ListProps['variant'][] = ['horizontal', 'vertical'];

const List: React.FC<ListProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => (
        <Styled.ListStyled ref={ref} {...props}>
            {React.Children.map(props.children, (c, i) => {
                return <li key={i}>{c}</li>;
            })}
        </Styled.ListStyled>
    ))
);

List.displayName = 'List';
List.Style = Styled.ListStyled;
List.defaultProps = {
    variant: 'vertical'
};

export default List

