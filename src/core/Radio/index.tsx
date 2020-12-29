import React, { FC, useState } from 'react';
import { WithStyle } from '../../utils';
import Text from '../Text/Text';
import { ErrorLabel, RadioSpan, RadioWrapper, StyledLabel } from './styled';
import { Props } from './types';

// export type Ref = HTMLLabelElement;

const Radio:FC<Props> & WithStyle = React.memo(React.forwardRef( (props, ref) => {
    const {size='S', label='CheckBox',errorText='',value,checked,labelColor,labelHoverEffect,hoverLabelColor} = props;
    const [select,setSelect] = useState(checked);

    return ( 
        <RadioWrapper>
            <ErrorLabel id="error" htmlFor="error">{errorText}</ErrorLabel>
            <StyledLabel ref={ref} size={size} onChange={()=>setSelect(!select)} {...props} >
                <Text className='radioLabel' hoverEffect={labelHoverEffect} hoverColor={hoverLabelColor} textSize={size} textColor={labelColor} >{label}</Text>
                <input type="radio" value={value===''?label:value} checked={checked||select} />
                <RadioSpan {...props}></RadioSpan>
            </StyledLabel>
        </RadioWrapper>
        )
})
);

Radio.displayName="CheckBox";
Radio.defaultProps = {
    hoverEffect: true,
    hasError:false,
    errorText:''
};

export default Radio
