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
    }
} as Meta;

const Template:Story = ({ labelColor, required, showPointer, labelSize,labelWeight,lineHeight,upperCase, ...args}) => {
    return <Label labelColor={labelColor} required={required} showPointer={showPointer} labelSize={labelSize} labelWeight={labelWeight} lineHeight={lineHeight} uppercase={upperCase} {...args}>
    Lorem Ipsum is simply dummy text
    </Label>
}

export const Default = Template.bind({});
Default.args = {
    labelSize:'S'
}


