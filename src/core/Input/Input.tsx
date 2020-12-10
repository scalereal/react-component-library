import React, { FC } from 'react';
import * as Styled from './Input.styled';
import { InputProps, WithStyle } from './types';

export const Input: FC<InputProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { fullWidth, required, prefix, suffix, ...restProps } = props,
            id = props.id || 'input';
        return (
            <Styled.Wrapper fullWidth={fullWidth}>
                {prefix && <Styled.Prefix>{prefix}</Styled.Prefix>}
                <Styled.Input id={id} ref={ref} required={required} fullWidth={fullWidth} {...restProps} />
                {suffix && <Styled.Suffix>{suffix}</Styled.Suffix>}
            </Styled.Wrapper>
        );
    })
);
Input.displayName = 'Input';
Input.Style = Styled.Input;
Input.defaultProps = {
    type: 'text',
    disabled: false,
    fullWidth: false,
    required: false,
};
export default Input
