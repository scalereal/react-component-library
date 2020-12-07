import React,{ FC } from 'react'
import * as Styled from "./Toast.styled"
import { ToastProps } from './types';

const Toast:FC<ToastProps> = ({ variant, title, message } : ToastProps) => {
    return (
        <Styled.Toast variant={variant}>
            <Styled.ToastHeader >
                <Styled.ToastTitle>
                     {title}
                </Styled.ToastTitle>
            </Styled.ToastHeader>
            <Styled.ToastBody>
                <Styled.ToastMessage>
                    {message}
                </Styled.ToastMessage>
            </Styled.ToastBody>
            <Styled.ToastFooter variant={variant}/>
            <Styled.ToastCloseIcon>
               X
            </Styled.ToastCloseIcon>
        </Styled.Toast>
    )
}

export default Toast
