import React,{ FC } from 'react'
import * as Styled from "./Toast.styled"
import { ToastProps,WithStyle } from './types';
import Text from '../Text/Text';

const Toast:FC<ToastProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { variant, title, message,...restProps } = props;
        return (
            <Styled.Toast ref={ref} variant={variant} {...restProps}>
                <Styled.ToastHeader>
                    {title && <Text>{title}</Text>}
                </Styled.ToastHeader>
                <Styled.ToastBody>
                    {message && <Text>{message}</Text>}
                </Styled.ToastBody>
                <Styled.ToastFooter variant={variant} />
                <Styled.ToastCloseIcon>X</Styled.ToastCloseIcon>
            </Styled.Toast>
        );
    })
);
Toast.displayName = 'Toast';
Toast.Style = Styled.Toast;

export default Toast
