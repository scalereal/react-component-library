import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import Link  from './Link'
import { LinkProps } from './types'

const linkSizes : LinkProps['linkSize'][] = ['XS', 'S', 'M', 'L', 'XL']

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
        },
        linkSize:{
            control: {
                type: 'select',
                options: Object.values(linkSizes),
            },
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

