import styled from "styled-components"
import { ToastProps } from './types';
import { defaultTheme } from "../../theme/theme"

export const Toast = styled('div')<ToastProps>`
    position:relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid ${defaultTheme.shadowColor};
    border-radius: .3rem;
    outline: 0;
    box-shadow: 0 0.5rem 2rem ${defaultTheme.shadowColor};
`;

export const ToastHeader = styled('div')`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid ${defaultTheme.shadowColor};
    border-top-left-radius: calc(.3rem - 1px);
    border-top-right-radius: calc(.3rem - 1px);
`;
export const ToastTitle = styled('div')`
    font-size:1.2em;
    color: ${defaultTheme.typographyColor};
    margin-bottom: 0;
    line-height: 1.5;
`;
export const ToastBody = styled('div')`
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
    background-color:#fff;
`;
export const ToastMessage = styled('div')`
    font-size:1em;
    color: ${defaultTheme.typographyColor};
    margin-top: 0;
    margin-bottom: 0.5rem;
`;
export const ToastFooter = styled('div')<ToastProps>`
    height:8px;
    background-color:${props => defaultTheme.statusColors[props.variant] };
`;
export const ToastCloseIcon = styled('div')`
    position:absolute;
    top:15px;
    right:10px;
    color: ${defaultTheme.iconColor};
`;
