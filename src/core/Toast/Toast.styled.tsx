import styled from 'styled-components'
import { ToastProps } from './types'
import { defaultTheme } from '../../theme'

export const Toast = styled('div')<ToastProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid ${({ theme, borderColor }) => (borderColor ? borderColor : theme.toast.borderColor)};
    border-radius: 0.3rem;
    outline: 0;
    box-shadow: 0 0.5rem 2rem ${({ theme, shadowColor }) => (shadowColor ? shadowColor : theme.toast.borderColor)};
`;
export const ToastHeader = styled('div')<ToastProps>`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid ${({ theme, borderColor }) => (borderColor ? borderColor : theme.toast.borderColor)};
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
`;
export const ToastBody = styled('div')`
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
    background-color:#fff;
`;
export const ToastFooter = styled('div')<ToastProps>`
    height:8px;
    background-color:${({ theme, variant }) => (theme.toast.statusColor[variant])};
`;
export const ToastCloseIcon = styled('div')`
    position:absolute;
    top:15px;
    right:10px;
`;

Toast.displayName = "Toast"
Toast.defaultProps = {
    theme:defaultTheme
}
ToastHeader.defaultProps = {
    theme: defaultTheme
};
ToastFooter.defaultProps = {
    theme: defaultTheme
};
