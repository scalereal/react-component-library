import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Label from "./Label"


export default {
    title: 'Components/Core/Label',
    component: Label,
    argTypes: {
        labelColor: {
            control: 'color'
        },
        hoverColor: {
            control: 'color'
        }
    }
} as Meta;

const Template:Story = ({ labelColor, required, showPointer, hoverColor, labelSize, ...args}) => {
    return <Label labelColor={labelColor} required={required} showPointer={showPointer} hoverColor={hoverColor} labelSize={labelSize} {...args}>
    Lorem Ipsum is simply dummy text
    </Label>
}

export const Default = Template.bind({});
Default.args = {
    labelSize:'S'
}


