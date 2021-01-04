import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import Card from './Card'
import { CardProps } from './types'

const variants : CardProps['variant'][]  = ['horizontal', 'vertical']
const textAlignments : CardProps['textAlignment'][] = ['left', 'center', 'right']
const textSizes : CardProps['titleSize'][] = ['XS', 'S', 'M', 'L', 'XL']
const descriptionSizes : CardProps['descriptionSize'][] = ['XS', 'S', 'M', 'L', 'XL']

export default {
    title: 'Components/Core/Card',
    component: Card,
    argTypes:{
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
        variant:{
            control: {
                type: 'select',
                options: Object.values(variants),
            },
        },
        textAlignment:{
            control: {
                type: 'select',
                options: Object.values(textAlignments),
            },
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

const Template:Story = ({ imgSrc, title, description, variant, textAlignment,borderColor, shadowColor, titleSize, descriptionSize, ...args}) => {
    return <Card imgSrc={imgSrc} 
                title={title} 
                description={description} 
                variant={variant} 
                textAlignment={textAlignment} 
                borderColor={borderColor} 
                shadowColor={shadowColor} 
                titleSize={titleSize} 
                descriptionSize={descriptionSize} 
                {...args} />
}

export const Default = Template.bind({});
Default.args = {
    title:'Title',
    description:'Lorem Ipsum is simply dummy text',
    imgSrc:'https://www.w3schools.com/w3css/img_forest.jpg',
    variant:'vertical',
    textAlignment:'left',
    titleSize:'M',
    descriptionSize:'XS',
}
