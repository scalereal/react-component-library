import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Link  from './Link';

export default {
    title: 'Components/Core/Link',
    component: Link,
} as Meta

const Template:Story = ({...args}) => {
    return (
    <Link href="#" {...args}>View Link</Link>
    )
}

export const Default = Template.bind({});

