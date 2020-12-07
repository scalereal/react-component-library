import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Card from "./Card"


export default {
    title: 'Components/Core/Card',
    component: Card,
} as Meta

const Template:Story = ({ img, title, message, ...args}) => {
    return <Card src={img} title={title} message={message} {...args} />
}

export const Default = Template.bind({});
Default.args = {
    title:'Title',
    message:'Lorem Ipsum is simply dummy text',
    src:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=0.630xw:1.00xh;0.186xw,0&resize=640:*"
}
