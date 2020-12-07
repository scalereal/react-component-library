import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import CheckBox from '.';
import { Props } from './types';

const SizeMap: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export default {
    title: 'Components/Core/CheckBox',
    component: CheckBox,
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
    return <CheckBox {...args} />;
};

export const Default = Template.bind({});
Default.args = {
};

