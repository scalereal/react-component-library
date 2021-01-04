import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import Text from './Text'
import { TextProps } from './types'

const textSizes : TextProps['textSize'][] = ['XS', 'S', 'M', 'L', 'XL']
const textAlignments : TextProps['textAlign'][] = ['left', 'right', 'center', 'justify', 'justify-all', 'start', 'end', 'match-parent', 'inherit', 'initial', 'unset']
const textWeights : TextProps['textWeight'][] = ['light', 'regular', 'medium', 'strong', 'extraStrong']

export default {
    title: 'Components/Core/Text',
    component: Text,
    argTypes: {
        hoverEffect:{
            control:{ type: 'boolean'} 
        },
        textColor: {
            control: 'color'
        },
        hoverColor: {
            control: 'color'
        },
        activeColor: {
            control:'color'
        },
        textSize:{
            control: {
                type: 'select',
                options: Object.values(textSizes),
            },
        },
        textAlign: {
            control: {
                type: 'select',
                options: Object.values(textAlignments)
            }
        },
        textWeight: {
            control: {
                type: 'select',
                options: Object.values(textWeights)
            }
        }
    }
} as Meta;

const Template:Story = ({ textColor,activeColor,hoverColor, lineThrough, uppercase, textSize, lineHeight, textWeight,textAlign, ...args}) => {
    return <Text textColor={textColor} activeColor={activeColor} hoverColor={hoverColor} lineThrough={lineThrough} uppercase={uppercase} textSize={textSize} lineHeight={lineHeight} textWeight={textWeight} textAlign={textAlign} {...args}>
    Lorem Ipsum is simply dummy text
    </Text>
}

export const Default = Template.bind({});
Default.args = {
    textSize:'S'
}
