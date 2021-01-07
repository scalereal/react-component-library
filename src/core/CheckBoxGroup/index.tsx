import React, { FC, memo, useState } from 'react';
import CheckBox from '../CheckBox';
import { CheckBoxWrapper, ErrorLabel } from '../CheckBox/styled';
import Text from '../Text/Text';
import { StyledLabel, StyledLi, StyledUl } from './styled';
import { Props } from './types';

export const SizeMap: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];
export const DisplayMap: Props['display'][] = ['inline', 'block'];
export const lposMap: Props['labelPosition'][] = ['top','bottom','left','right']

const CheckBoxGroup:FC<Props> = memo(React.forwardRef( (props, ref) => {
    const {display="block",checkBoxOptions,errorText,size,
    fontSize,labelColor,labelHoverEffect,labelHoverColor,
    label,showSelectAll=false,hoverEffect,disabled,
    bgColor,hoverBgColor,hoverShadowColor,labelPosition} = props;

    const [selectAll,setSelectAll] = useState<boolean>(false);

    return (
        <CheckBoxWrapper ref={ref} {...props}>
            <ErrorLabel id="error" htmlFor="error">{errorText}</ErrorLabel>
            <StyledLabel size={size} {...props} >
                {showSelectAll?<input type="checkbox" checked={selectAll} onChange={()=>setSelectAll(!selectAll)}/>:''}
                <Text textSize={fontSize} textColor={labelColor} hoverEffect={labelHoverEffect} hoverColor={labelHoverColor} >{label}</Text>
            </StyledLabel>
            <StyledUl display={display} {...props}>
                {checkBoxOptions && checkBoxOptions.map(obj=>{ 
                return (
                    <StyledLi key={obj.id}>
                        <CheckBox key={obj.id} label={obj.label} 
                        value={obj.value} checked={obj.checked?obj.checked:selectAll} 
                        size={size} fontSize={fontSize} labelColor={labelColor}
                        hoverEffect={hoverEffect} labelHoverEffect={labelHoverEffect} labelHoverColor={labelHoverColor}
                        disabled={obj.disabled?obj.disabled:disabled} bgColor={bgColor}
                        hoverBgColor={hoverBgColor} hoverShadowColor={hoverShadowColor}
                        labelPosition={labelPosition}
                        />
                    </StyledLi>)
                })}
            </StyledUl>
        </CheckBoxWrapper>
        )
}));

CheckBoxGroup.displayName="CheckBoxGroup";
CheckBoxGroup.defaultProps = {
    hoverEffect: true,
    size:'S'
};

export default CheckBoxGroup;
