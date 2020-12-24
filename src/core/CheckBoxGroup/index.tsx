import React from 'react';
import CheckBox from '../CheckBox';
import { StyledLi, StyledUl } from './styled';
import { Props } from './types';

export type Ref = HTMLUListElement;

let CheckBoxGroup = React.forwardRef<Ref, Props>( (props, ref) => {
    const {display="block"} = props;
    return ( 
        <StyledUl ref={ref} display={display} {...props}>
            {/* {props.options.length>0 && props.options.map(obj=>{ */}
                <StyledLi><CheckBox label={"1"} value={1}/></StyledLi>
                <StyledLi><CheckBox label={"2"} value={2}/></StyledLi>
            {/* })} */}
        </StyledUl>
        )
});

CheckBoxGroup.displayName="CheckBoxGroup";
CheckBoxGroup.defaultProps = {
    // hoverEffect: false
};

export default CheckBoxGroup = React.memo(CheckBoxGroup)
