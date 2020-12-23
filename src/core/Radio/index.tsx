import React, { FC, useState } from 'react';
import { WithStyle } from '../../utils';
import { ErrorLabel, StyledLabel } from './styled';
import { RadioProps } from './types';

// export type Ref = HTMLLabelElement;

const Radio:FC<RadioProps> & WithStyle = React.memo(React.forwardRef( (props, ref) => {
    const {size='S', label='CheckBox',errorText='',value,checked} = props;
    const [select,setSelect] = useState(checked);

    return ( 
        <div>
            <ErrorLabel id="error" htmlFor="error">{errorText}</ErrorLabel>
            <StyledLabel ref={ref} size={size} onChange={()=>setSelect(!select)} {...props} >
                {label}
                <input type="radio" value={value===''?label:value} checked={checked||select} />
                <span></span>
            </StyledLabel>
        </div>
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
