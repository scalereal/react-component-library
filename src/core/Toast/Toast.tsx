import React,{ FC } from 'react'
import * as Styled from "./Toast.styled"
import { ToastProps } from './types';
import { WithStyle } from '../../utils'

import Text from '../Text/Text';

const Toast:FC<ToastProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { variant, title, message, titleColor, messageColor, borderColor, ...restProps } = props;
        return (
            <Styled.Toast ref={ref} variant={variant} {...restProps}>
                <Styled.ToastHeader variant={variant} borderColor={borderColor}>
                    <Text textSize="S" lineHeight="1.5" textColor={titleColor}>
                        {title}
                    </Text>
                </Styled.ToastHeader>
                <Styled.ToastBody>
                    <Text textSize="XS" textColor={messageColor}>
                        {message}
                    </Text>
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
