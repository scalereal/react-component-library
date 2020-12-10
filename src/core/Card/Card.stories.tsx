import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Card from "./Card"

export default {
    title: 'Components/Core/Card',
    component: Card,
} as Meta

const Template:Story = ({ img, title, description, direction, alignText, ...args}) => {
    return <Card src={img} title={title} description={description} direction={direction} alignText={alignText} {...args} />
}

export const Default = Template.bind({});
Default.args = {
    title:'Title',
    description:'Lorem Ipsum is simply dummy text',
    src:"https://www.w3schools.com/w3css/img_forest.jpg",
    direction:'column',
    alignText:'left'
}
