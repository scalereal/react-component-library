import React from 'react';
import { ErrorLabel, StyledLabel } from './styled';
import { Props } from './types';

export type Ref = HTMLLabelElement;

let CheckBox = React.forwardRef<Ref, Props>( (props, ref) => {
    const {size='S', label='CheckBox',value='',errorText=''} = props;
  
    return ( 
        <div>
            <ErrorLabel id="error" htmlFor="error">{errorText}</ErrorLabel>
            <StyledLabel ref={ref} size={size} {...props} >
                <input type="checkbox" value={value===''?label:value}/>
                <span>{label}</span>
                {/* <Label>{label}</Label> */}
            </StyledLabel>
        </div>
        )
});

CheckBox.displayName="CheckBox";
CheckBox.defaultProps = {
    hoverEffect: false
};

export default CheckBox = React.memo(CheckBox)
