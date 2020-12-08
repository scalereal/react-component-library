
import styled from "styled-components"
import { ModalProps } from './types';
import { defaultTheme } from "../../theme/theme"

export const Modal = styled('div')<ModalProps>`
    position: relative;
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
export const ModalHeader = styled('div')<ModalProps>`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid ${defaultTheme.shadowColor};
    border-top-left-radius: calc(.3rem - 1px);
    border-top-right-radius: calc(.3rem - 1px);
`;

export const ModalTitle = styled('div')`
    font-size:1.2em;
    color: ${defaultTheme.typographyColor};
    margin-bottom: 0;
    line-height: 1.5;
`;
export const ModalBody = styled('div')<ModalProps>`
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
`;
export const ModalDescription = styled('div')`
    font-size:1em;
    color: ${defaultTheme.typographyColor};
    margin-top: 0;
    margin-bottom: 1rem;
`;
export const ModalFooter = styled('div')`
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
    padding: .75rem;
    border-top: 1px solid ${defaultTheme.shadowColor};
    border-bottom-right-radius: calc(.3rem - 1px);
    border-bottom-left-radius: calc(.3rem - 1px);
`;
export const ModalCloseIcon = styled('div')`
    position:absolute;
    top:15px;
    right:10px;
    color: ${defaultTheme.iconColor};
`;
