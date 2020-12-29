import styled from 'styled-components';
import { ModalProps } from './types';
import { defaultTheme } from '../../theme';

export const Modal = styled('div')<ModalProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid ${({ theme, borderColor }) => borderColor ? borderColor : theme.modal.defaults.borderColor};
    border-radius: .3rem;
    outline: 0;
    box-shadow: 0 0.5rem 2rem ${({ theme, shadowColor }) => shadowColor ? shadowColor : theme.modal.defaults.shadowColor};
`;
Modal.defaultProps = {
    theme:defaultTheme
}
export const ModalHeader = styled('div')<ModalProps>`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid ${({ theme, borderColor }) => borderColor ? borderColor : theme.modal.defaults.borderColor};
    border-top-left-radius: calc(.3rem - 1px);
    border-top-right-radius: calc(.3rem - 1px);
`;
ModalHeader.defaultProps = {
    theme:defaultTheme
}
export const ModalTitle = styled('div')`
    margin-bottom: 0;
`;
export const ModalBody = styled('div')<ModalProps>`
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
`;
export const ModalDescription = styled('div')`
    margin-top: 0;
    margin-bottom: 1rem;
`;
export const ModalFooter = styled('div')<ModalProps>`
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
    padding: .75rem;
    border-top: 1px solid ${({ theme, borderColor }) => borderColor ? borderColor : theme.modal.defaults.borderColor};
    border-bottom-right-radius: calc(.3rem - 1px);
    border-bottom-left-radius: calc(.3rem - 1px);
`;
ModalFooter.defaultProps = {
    theme:defaultTheme
}
