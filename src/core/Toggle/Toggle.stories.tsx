import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Toggle from "./Toggle"
import { ToggleProps } from './types'

const size: ToggleProps['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export default {
    title: 'Components/Core/Toggle',
    component: Toggle,
    argTypes : {
        size:{
        control: {
            type: 'select',
            options: Object.values(size),
          },
        },
    },
} as Meta

const Template:Story = ({ size, ...args}) => {
    return <Toggle size={size} {...args} />
}

export const Default = Template.bind({});
Default.args = {
    size:'M'
}
