import React, { FC } from 'react';
import * as Styled from './Input.styled';
import { InputProps } from './types';

export const Input: FC<InputProps> = ({ id, fullWidth, prefix, suffix, required, ...restProps}:InputProps) =>{
    return (
        <Styled.Wrapper fullWidth={fullWidth}required={required}>
            {prefix && <Styled.Prefix>{prefix}</Styled.Prefix>}
                <Styled.Input id={id}  required={required} fullWidth={fullWidth} {...restProps} />
            {suffix && <Styled.Suffix>{suffix}</Styled.Suffix>}
        </Styled.Wrapper>
    );
}
export default Input