import React, { FC } from 'react';
import * as Styled from "./Label.styled"
import { LabelProps, WithStyle } from './types';

const Label: FC<LabelProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => (
        <Styled.Label ref={ref} {...props}>
            {props.children}
        </Styled.Label>
    ))
);

Label.defaultProps = {
    required: false
};
Label.displayName = 'Label';
Label.Style = Styled.Label;

export default Label
