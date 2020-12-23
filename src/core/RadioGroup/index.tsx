import React, { FC, useState } from 'react';
import { WithStyle } from '../../utils';
import Radio from '../Radio';
import { StyledLi, StyledUl } from './styled';
import { Props } from './types';

// export type Ref = HTMLLabelElement;

const RadioGroup:FC<Props> & WithStyle = React.memo(React.forwardRef( (props, ref) => {
    const {options} = props;
    const [select,setSelect] = useState<any>('');
    
    const handleChange = (e:any) =>{
        setSelect(e.target.value)
    }


    return ( 
        <StyledUl ref={ref} {...props} >
            {options && options.map(obj=>{
                return <StyledLi key={obj.id}><Radio label={obj.label} value={obj.value} checked={select==obj.value} onChange={handleChange} /></StyledLi>
            })}
        </StyledUl>
    )
}));

RadioGroup.displayName="RadioGroup";
RadioGroup.defaultProps = {
    
};

export default RadioGroup
