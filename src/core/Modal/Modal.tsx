import * as React from 'react'
import Text from '../Text/Text'
import * as Styled from './Modal.styled'
import { ModalProps } from './types'

export const textSizes : ModalProps['titleSize'][] = ['XS', 'S', 'M', 'L', 'XL']
export const descriptionSizes : ModalProps['descriptionSize'][] = ['XS', 'S', 'M', 'L', 'XL']

const Toast:React.FC<ModalProps> = ({ title, description, borderColor, shadowColor, titleSize,titleColor,descriptionSize,descriptionColor } : ModalProps) => {

    return (
        <Styled.Modal title={title} description={description} shadowColor={shadowColor} borderColor={borderColor} titleSize={titleSize} descriptionSize={descriptionSize}>
            <Styled.ModalHeader title={title} description={description} shadowColor={shadowColor} borderColor={borderColor} titleSize={titleSize} descriptionSize={descriptionSize}>
                <Styled.ModalTitle>
                     <Text textSize={titleSize} lineHeight="1.5" textColor={titleColor}>{title}</Text>
                </Styled.ModalTitle>
            </Styled.ModalHeader>
            <Styled.ModalBody title={title} description={description} shadowColor={shadowColor} borderColor={borderColor} titleSize={titleSize} descriptionSize={descriptionSize}>
              <Styled.ModalDescription>
                  <Text textSize={descriptionSize} textColor={descriptionColor}>{description}</Text>
              </Styled.ModalDescription>
            </Styled.ModalBody>
            <Styled.ModalFooter title={title} description={description} shadowColor={shadowColor} borderColor={borderColor} titleSize={titleSize} descriptionSize={descriptionSize}/>
        </Styled.Modal>
    )
}

export default Toast
