import React, { FC, memo, useState } from 'react';
import { WithStyle } from '../../utils';
import Text from '../Text/Text';
import { CheckBoxWrapper, ErrorLabel, StyledLabel } from './styled';
import { Props } from './types';

export const SizeMap: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];
export const lposMap: Props['labelPosition'][] = ['top','bottom','left','right']

const CheckBox:FC<Props> & WithStyle = memo(React.forwardRef( (props, ref) => {
    const {size='S', label='CheckBox',value='',errorText='',fontSize,labelHoverEffect,labelHoverColor,labelColor,checked=false} = props;
    const [check,setCheck] = useState<boolean>(checked);

    return ( 
        <CheckBoxWrapper ref={ref} {...props}>
            <ErrorLabel id="error" htmlFor="error">{errorText}</ErrorLabel>
            <StyledLabel size={size} {...props} >
                <input type="checkbox" checked={checked?checked:check} value={value===''?label:value} onChange={()=>setCheck(!check)}/>
                <Text textSize={fontSize} textColor={labelColor} hoverEffect={labelHoverEffect} hoverColor={labelHoverColor} >{label}</Text>
            </StyledLabel>
        </CheckBoxWrapper>
        )
}));

CheckBox.displayName="CheckBox";
CheckBox.defaultProps = {
    hoverEffect: true
};

export default CheckBox;
