import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import Modal from './Modal'
import { ModalProps } from './types'

const textSizes : ModalProps['titleSize'][] = ['XS', 'S', 'M', 'L', 'XL']
const descriptionSizes : ModalProps['descriptionSize'][] = ['XS', 'S', 'M', 'L', 'XL']

export default {
    title: 'Components/Core/Modal',
    component: Modal,
    argTypes: {
        shadowColor:{
            control:'color'
        },
        borderColor:{
            control:'color'
        },
        titleColor:{
            control:'color'
        },
        descriptionColor:{
            control:'color'
        },
        titleSize:{
            control: {
                type: 'select',
                options: Object.values(textSizes),
            },
        },
        descriptionSize:{
            control: {
                type: 'select',
                options: Object.values(descriptionSizes),
            },
        }
    }
} as Meta

const Template:Story = ({ title, description,borderColor, shadowColor, titleSize,titleColor,descriptionSize,descriptionColor, ...args}) => {
    return <Modal title={title} description={description} shadowColor={shadowColor} borderColor={borderColor} titleSize={titleSize} descriptionSize={descriptionSize} titleColor={titleColor} descriptionColor={descriptionColor} {...args} />
}

export const Default = Template.bind({});
Default.args = { 
    title:'Title',
    description:'Lorem Ipsum is simply dummy text',
    titleSize:'M',
    descriptionSize:'XS',
}
