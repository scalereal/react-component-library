import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Modal from "./Modal"


export default {
    title: 'Components/Core/Modal',
    component: Modal,
} as Meta

const Template:Story = ({ title, description,...args}) => {
    return <Modal title={title} description={description}  {...args} />
}

export const Default = Template.bind({});
Default.args = {
    title:'Title',
    description:'Lorem Ipsum is simply dummy text',
}
