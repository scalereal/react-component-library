
import styled from "styled-components"
import { ToastProps } from './types';
import { defaultTheme } from "../../theme/theme"

export const Toast = styled('div')<ToastProps>`
    display: flex;
    flex-direction:column;
    border: 1px solid ${defaultTheme.shadowColor};
    border-radius: 3px;
    max-width:20rem;
    box-shadow: 0 0.5rem 2rem ${defaultTheme.shadowColor};
    width:16rem;
    height:100%;
    position:relative;
`;

export const ToastHeader = styled('div')`
    padding:0.9rem 0.8rem;
    background-color:#fff;
    height:100%;
    border-bottom:1px solid ${defaultTheme.shadowColor};
`;
export const ToastTitle = styled('div')`
    font-size:1.2em;
    color: ${defaultTheme.typographyColor};
`;
export const ToastBody = styled('div')`
    padding:0.9rem 0.8rem;
    background-color:#fff;
    height:100%;
`;
export const ToastMessage = styled('div')`
    font-size:1em;
    color: ${defaultTheme.typographyColor};
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
