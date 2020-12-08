import React,{ FC } from 'react'
import * as Styled from "./Modal.styled"
import { ModalProps } from './types';

const Toast:FC<ModalProps> = ({ title, description } : ModalProps) => {

    return (
        <Styled.Modal title={title} description={description}>
            <Styled.ModalHeader title={title} description={description}>
                <Styled.ModalTitle>
                     {title}
                </Styled.ModalTitle>
            </Styled.ModalHeader>
            <Styled.ModalBody title={title} description={description}>
              <Styled.ModalDescription>
                  {description}
              </Styled.ModalDescription>
            </Styled.ModalBody>
            <Styled.ModalFooter>

            </Styled.ModalFooter>
            <Styled.ModalCloseIcon>
               X
            </Styled.ModalCloseIcon>
        </Styled.Modal>
    )
}

export default Toast
