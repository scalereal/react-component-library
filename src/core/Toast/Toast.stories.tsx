import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import Toast from './Toast'
import { ToastProps } from './types'

const variants: ToastProps['variant'][] = ['danger', 'warning', 'success', 'info'];
const positions: ToastProps['position'][] = ['top-left', 'top-center', 'top-right', 'right-center', 'left-center', 'bottom-left', 'bottom-center', 'bottom-right'];
const borderPositions: ToastProps['borderPosition'][] = ['top','bottom','left','right']
export default {
    title: 'Components/Core/Toast',
    component: Toast,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: Object.values(variants)
            }
        },
        titleColor: {
            control: 'color'
        },
        messageColor: {
            control: 'color'
        },
        shadowColor: {
            control: 'color'
        },
        borderColor: {
            control: 'color'
        },
        position: {
            control: {
                type: 'select',
                options: Object.values(positions)
            }
        },
        borderPosition: {
            control: {
                type: 'select',
                options: Object.values(borderPositions)
            }
        },
    }
} as Meta;

const Template:Story = ({ variant, title, message, titleColor, messageColor, borderColor, shadowColor, position,borderPosition, ...args}) => {
    return <Toast variant={variant} title={title} message={message} titleColor={titleColor} messageColor={messageColor} borderColor=
    {borderColor} shadowColor={shadowColor} position={position} borderPosition={borderPosition} {...args} />
}

export const Default = Template.bind({});
Default.args = {
    variant:'success',
    title:'Title',
    message:'Lorem Ipsum is simply dummy text',
    borderPosition:'top'
}
