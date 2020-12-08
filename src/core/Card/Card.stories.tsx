import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Card from "./Card"
import { CardProps } from "./types"

const directions: CardProps['direction'][] = ['column', 'row'];
const alignments: CardProps['align'][] = ['left', 'center', 'right'];

export default {
    title: 'Components/Core/Card',
    component: Card,
    argTypes : {
        direction:{
        control: {
            type: 'select',
            options: Object.values(directions),
          },
        },
        alignText:{
        control: {
            type: 'select',
            options: Object.values(alignments),
          },
        },
    },
} as Meta

const Template:Story = ({ img, title, description, direction, align, ...args}) => {
    return <Card src={img} title={title} description={description} direction={direction} align={align} {...args} />
}

export const Default = Template.bind({});
Default.args = {
    title:'Title',
    description:'Lorem Ipsum is simply dummy text',
    src:"https://www.w3schools.com/w3css/img_forest.jpg",
    direction:'column',
    align:'left'
}
