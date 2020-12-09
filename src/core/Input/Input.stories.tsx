import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Input from "./Input"


export default {
    title: 'Components/Core/Input',
    component:Input,
} as Meta

const Template:Story = ({ suffix, prefix, required, disabled, fullWidth,...args}) => {
    return <Input
        id="storybook-input"
        type="email"
        fullWidth={fullWidth}
        disabled={disabled}
        required={required}
        placeholder='Enter Email Address'
        prefix={suffix}
        suffix={prefix} 
        {...args}>
    </Input>
}

export const Default = Template.bind({});
Default.args = {
    
}


