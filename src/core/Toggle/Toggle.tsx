import * as React from 'react'
import { WithStyle } from '../../utils'
import * as Styled from './Toggle.styled'
import { ToggleProps } from './types'

export const toggleSizes : ToggleProps['size'][] = ['XS', 'S', 'M', 'L', 'XL']

export const Toggle: React.FC<ToggleProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { size, required, onChange, ...restProps } = props;

        const changeHandler = React.useCallback(
            (e: any) => {
                e.stopPropagation();
                onChange && onChange(e);
            },
            [onChange]
        );

        return (
                <Styled.ToggleWrapper size={size} disabled={restProps.disabled}>
                    {
                        <Styled.Checkbox ref={ref}  size={size} required={required} onChange={changeHandler} {...restProps} />
                    }
                    <Styled.Circle size={size} />
                </Styled.ToggleWrapper>
        );
    })
);

Toggle.displayName = 'Toggle';
Toggle.Style = Styled.ToggleWrapper;
Toggle.defaultProps = {
    required: false,
};

export default Toggle
