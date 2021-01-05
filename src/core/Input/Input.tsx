import React, { FC } from 'react'
import * as Styled from './Input.styled'
import { InputProps } from './types'
import { WithStyle } from '../../utils'

export const Input: FC<InputProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const {
                fullWidth,
                required,
                prefix,
                suffix,
                borderColor,
                textColor,
                disabledColor,
                backgroundColor,
                disabled,
                placeHolderColor,
                preffixBackgroundColor,
                suffixBackgroundColor,
                ...restProps
            } = props,
            id = props.id || 'input';
        return (
            <Styled.Wrapper fullWidth={fullWidth} borderColor={borderColor} textColor={textColor}>
                {prefix && <Styled.Prefix preffixBackgroundColor={preffixBackgroundColor}>{prefix}</Styled.Prefix>}
                <Styled.Input
                    id={id}
                    ref={ref}
                    required={required}
                    fullWidth={fullWidth}
                    disabledColor={disabledColor}
                    backgroundColor={backgroundColor}
                    placeHolderColor={placeHolderColor}
                    disabled={disabled}
                    {...restProps}
                />
                {suffix && <Styled.Suffix suffixBackgroundColor={suffixBackgroundColor}>{suffix}</Styled.Suffix>}
            </Styled.Wrapper>
        );
    })
);
Input.displayName = 'Input';
Input.Style = Styled.Input;
Input.defaultProps = {
    type: 'text',
    disabled: false,
    fullWidth: false,
    required: false,
};
export default Input
