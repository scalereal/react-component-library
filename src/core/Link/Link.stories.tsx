import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Link  from './Link';

export default {
    title: 'Components/Core/Link',
    component: Link,
    argTypes: {
        linkColor: {
            control: 'color'
        },
        hoverColor: {
            control: 'color'
        },
        activeColor: {
            control: 'color'
        }
    }
} as Meta;

const Template:Story = ({linkSize,linkColor,hoverColor,activeColor,...args}) => {
    return (
    <Link href="#" linkSize={linkSize} linkColor={linkColor} hoverColor={hoverColor} activeColor={activeColor} {...args}>View Link</Link>
    )
}

export const Default = Template.bind({});
Default.args = {
    linkSize:'S'
}

