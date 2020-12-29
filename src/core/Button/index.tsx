import React, { FC, memo } from 'react';
import { WithStyle } from '../../utils';
import Text from '../Text/Text';
import { StyledButton } from './styled';
import { Props } from './types';

export type Ref = HTMLButtonElement;

const Button:FC<Props> & WithStyle = memo(React.forwardRef( (props, ref) => {
    const {type='primary',size='S',textSize, textColor, hoverTextColor} = props;
    
    return <StyledButton ref={ref} type={type} size={size} {...props}>
            <Text textSize={textSize} textColor={textColor} hoverColor={hoverTextColor}>{props.children}</Text>
        </StyledButton>;
}));

Button.displayName="Button";
Button.defaultProps = {
    hoverEffect: true
};

export default Button;
