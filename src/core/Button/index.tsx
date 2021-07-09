import * as React from 'react';
import { WithStyle } from '../../utils';
import { Text } from '../Text/Text';
import { StyledButton } from './styled';
import { Props } from './types';

export const SizeMap: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];
export const TypeMap: Props['type'][] = ['primary', 'secondary', 'warning', 'danger', 'success'];
export const EdgeMap: Props['edges'][] = ['squared', 'rounded', 'circle'];

export const Button: React.FC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { type = 'primary', size = 'S', textSize, textColor, hoverTextColor } = props;

        return (
            <StyledButton ref={ref} type={type} size={size} {...props}>
                <Text textSize={textSize} textColor={textColor} hoverColor={hoverTextColor}>
                    {props.children}
                </Text>
            </StyledButton>
        );
    })
);

Button.displayName = 'Button';
Button.defaultProps = {
    hoverEffect: true,
    size: 'S',
    edges: 'squared'
};

export default Button;
