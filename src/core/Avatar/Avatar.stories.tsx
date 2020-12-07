import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Avatar from '.';
import { Props } from './types';

const SizeMap: Props['size'][] = ['ES', 'S', 'M', 'L'];

export default {
    title: 'Components/Core/Avatar',
    component: Avatar,
    argTypes : {
        size : {
            control: {
                type: 'select',
                options: Object.values(SizeMap),
            },
        },
        bgColor : {
            control:'color'
        },
        textColor: {
            control:'color'
        },
        hoverBgColor: {
            control:'color'
        },
        hoverTextColor: {
            control:'color'
        },
        hoverShadowColor: {
            control:'color'
        },
        hoverTextShadowColor: {
            control:'color'
        },
        hoverEffect:{ 
            control: { type: 'boolean'}  
        },
        disabled:{
            control:{type:'boolean'}
        }
    }
} as Meta;

const Template: Story<Props> = ({...args }) => {
    // retrieves the appropriate icon passes it as a component prop
    return <Avatar {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    res: 'https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0=',
};

export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
    res:'pradip bhusnar'
};
