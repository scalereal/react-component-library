import React, { FC } from 'react'
import * as Styled from './Input.styled'
import { InputProps } from './types'
import { WithStyle } from '../../utils'

export const Input: FC<InputProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const {
                fullWidth,
                required,
                preffix,
                suffix,
                borderColor,
                textColor,
                disabledColor,
                backgroundColor,
                disabled,
                placeHolderColor,
                preffixBackgroundColor,
                suffixBackgroundColor,
                hasError,
                errorText,
                preffixColor,
                suffixColor,
                ...restProps
            } = props,
            id = props.id || 'input';
        return (
            <Styled.OuterWrapper>
                <Styled.InputWrapper fullWidth={fullWidth} borderColor={borderColor} textColor={textColor} hasError={hasError}>
                    {preffix && <Styled.Preffix preffixBackgroundColor={preffixBackgroundColor} preffixColor={preffixColor} hasError={hasError}>{preffix}</Styled.Preffix>}
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
                    {suffix && <Styled.Suffix suffixBackgroundColor={suffixBackgroundColor} suffixColor={suffixColor} hasError={hasError}>{suffix}</Styled.Suffix>}
                </Styled.InputWrapper>
                {hasError && <Styled.Error>{errorText}</Styled.Error>}
            </Styled.OuterWrapper>
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
