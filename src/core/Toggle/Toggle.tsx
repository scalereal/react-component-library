import React, { FC } from 'react';
import * as Styled from './Toggle.styled';
import { ToggleProps } from './types';

export const Toggle: FC<ToggleProps> = ({size}:ToggleProps) => {
   
    return (
        <Styled.Wrapper size={size}>
            <Styled.Checkbox size={size} />
            <Styled.Circle size={size}/>
        </Styled.Wrapper>
    )
}
export default Toggle