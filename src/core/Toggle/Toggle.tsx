import React, { FC, useCallback } from 'react';
import * as Styled from './Toggle.styled';
import { ToggleProps,WithStyle } from './types';

export const Toggle: FC<ToggleProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { size, required, onChange, ...restProps } = props;

        const changeHandler = useCallback(
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