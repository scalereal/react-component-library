import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Toast from "./Toast"
import { ToastProps } from './types'

const variants: ToastProps['variant'][] = ['danger', 'warning', 'success', 'info'];

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
        }
    }
} as Meta;

const Template:Story = ({ variant, title, message, titleColor, messageColor, borderColor, shadowColor, ...args}) => {
    return <Toast variant={variant} title={title} message={message} titleColor={titleColor} messageColor={messageColor} borderColor=
    {borderColor} shadowColor={shadowColor} {...args} />
}

export const Default = Template.bind({});
Default.args = {
    variant:'success',
    title:'Title',
    message:'Lorem Ipsum is simply dummy text'
}
