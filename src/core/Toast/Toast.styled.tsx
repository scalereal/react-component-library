import styled from "styled-components"
import { ToastProps } from './types';
import { toastTheme } from "../../theme/core/toast/index"

export const Toast = styled('div')<ToastProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid ${({ theme, borderColor }) => (borderColor ? borderColor : theme.borderColor)};
    border-radius: 0.3rem;
    outline: 0;
    box-shadow: 0 0.5rem 2rem ${({ theme, shadowColor }) => (shadowColor ? shadowColor : theme.borderColor)};
`;
export const ToastHeader = styled('div')<ToastProps>`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid ${({ theme, borderColor }) => (borderColor ? borderColor : theme.borderColor)};
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
    background-color:${({ theme, variant }) => (theme.statusColor[variant])};
`;
export const ToastCloseIcon = styled('div')`
    position:absolute;
    top:15px;
    right:10px;
`;

Toast.displayName = "Toast"
Toast.defaultProps = {
    theme:toastTheme
}
ToastHeader.defaultProps = {
    theme: toastTheme
};
ToastFooter.defaultProps = {
    theme: toastTheme
};
