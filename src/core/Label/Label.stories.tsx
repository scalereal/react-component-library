import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import Label from './Label'
import { LabelProps } from './types'

const labelSizes : LabelProps['labelSize'][]  = ['XS', 'S', 'M', 'L', 'XL']
const labelWeights : LabelProps['labelWeight'][] = ['light', 'regular', 'medium', 'strong', 'extraStrong']
export default {
    title: 'Components/Core/Label',
    component: Label,
    argTypes: {
        labelColor: {
            control: 'color'
        },
        labelSize:{
            control: {
                type: 'select',
                options: Object.values(labelSizes),
            },
        },
        labelWeight:{
            control: {
                type: 'select',
                options: Object.values(labelWeights),
            },
        }
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


