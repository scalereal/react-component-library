import React, { FC } from 'react'
import { WithStyle } from '../../utils'
import Text from '../Text/Text'
import * as Styled from './Toast.styled'
import { ToastProps } from './types'


const Toast:FC<ToastProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { variant, title, message, titleColor, messageColor, ...restProps } = props;
        const color = variant === 'success' ? '#008000' : variant === 'info' ? '#126AFA' : variant === 'danger' ? '#cc0000' : variant === 'warning'? '#ff9800' : '';
        return (
            <Styled.ToastContainer ref={ref} variant={variant} {...restProps}>
                <Styled.Toast variant={variant} {...restProps}>
                <Styled.ToastHeader {...props}>
                    <Text textSize="S" textColor={titleColor ? titleColor : color}>
                        {title}
                    </Text>
                </Styled.ToastHeader>
                <Styled.ToastBody>
                    <Text textSize="XS" textColor={messageColor ? messageColor : color}>
                        {message}
                    </Text>
                </Styled.ToastBody>
            </Styled.Toast>
            </Styled.ToastContainer>
        );
    })
);
Toast.displayName = 'Toast';
Toast.Style = Styled.ToastContainer;

export default Toast
