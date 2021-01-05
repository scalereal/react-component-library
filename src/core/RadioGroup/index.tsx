import React, { FC, useState } from 'react';
import { WithStyle } from '../../utils';
import Radio from '../Radio';
import Text from '../Text/Text';
import { ErrorLabel, RadioGroupWrapper, StyledLi, StyledUl, StyledWrapper } from './styled';
import { Props } from './types';

export const SizeMap: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];
export const lposMap: Props['labelPosition'][] = ['top','bottom','left','right']
export const DisplayMap: Props['display'][] = ['inline', 'block'];

const RadioGroup:FC<Props> & WithStyle = React.memo(React.forwardRef( (props, ref) => {
    const {size,options,mainLabel,errorText,
    labelColor,labelHoverEffect,hoverLabelColor,
    hoverEffect,bgColor,hoverCheckedBgColor,
    hoverBgColor,checkedBgColor,labelPosition} = props;
    const [select,setSelect] = useState<any>('');
    
    const handleChange = (e:any) =>{
        setSelect(e.target.value)
    }


    return ( 
        <StyledWrapper ref={ref} {...props}>
            <ErrorLabel>{errorText}</ErrorLabel>
            <RadioGroupWrapper {...props}>
                <Text className='radioGroupLabel' textColor={labelColor} 
                    hoverColor={hoverLabelColor} hoverEffect={labelHoverEffect} 
                    textSize={size}
                >
                    {mainLabel}
                </Text>
                <StyledUl {...props} >
                    {options && options.map(obj=>{
                        return ( 
                        <StyledLi key={obj.id}>
                            <Radio label={obj.label} value={obj.value} checked={select==obj.value}
                                onChange={handleChange} size={size}  labelHoverEffect={labelHoverEffect}
                                labelColor={labelColor} hoverLabelColor={hoverLabelColor} 
                                hoverEffect={hoverEffect} bgColor={bgColor} hoverCheckedBgColor={hoverCheckedBgColor}
                                hoverBgColor={hoverBgColor} checkedBgColor={checkedBgColor} labelPosition={labelPosition}
                            />
                        </StyledLi>)
                    })}
                </StyledUl>
            </RadioGroupWrapper>
        </StyledWrapper>
    )
}));

RadioGroup.displayName="RadioGroup";
RadioGroup.defaultProps = {
    hoverEffect:true,
    size:'S'
};

export default RadioGroup
