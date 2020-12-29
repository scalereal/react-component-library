import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Toggle from "./Toggle"

export default {
    title: 'Components/Core/Toggle',
    component: Toggle,
} as Meta

const Template:Story = ({ size, ...args}) => {
    return <Toggle size={size} {...args} />
}

export const Default = Template.bind({});
Default.args = {
    size:'M'
}
