import React from 'react';
import { StyledCheckBoxInput, StyledLabel } from './styled';
import { Props } from './types';

export type Ref = HTMLInputElement;

const CheckBox = React.forwardRef<Ref, Props>( (props, ref) => {
    const {size='S',type="checkbox"} = props;
    return (
        <StyledLabel ref={ref}>
            <StyledCheckBoxInput type={type} size={size} {...props}/>
            <span>CheckBox</span>
        </StyledLabel>
        )
});

CheckBox.displayName="CheckBox";
CheckBox.defaultProps = {
    hoverEffect: false
};

export default CheckBox
