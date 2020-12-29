import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Button from '.';
import { Props } from './types';

const SizeMap: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];
const TypeMap: Props['type'][] = ['primary', 'secondary', 'warning', 'danger', 'success'];

export default {
    title: 'Components/Core/Button',
    component: Button,
    argTypes : {
        size : {
            control: {
                type: 'select',
                options: Object.values(SizeMap),
            },
        },
        textSize : {
            control: {
                type: 'select',
                options: Object.values(SizeMap),
            },
        },
        type : {
            control: {
                type: 'select',
                options: Object.values(TypeMap),
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
        hoverEffect:{ 
            control: { type: 'boolean'}  
        },
        disabled:{
            control:{type:'boolean'}
        },
        ref:{
            table:{
              disable:true
            }
        },
        icon:{
            table:{
              disable:true
            }
        },
        className:{
            table:{
              disable:true
            }
        }
    }
} as Meta;

const Template: Story<Props> = ({...args }) => {
    // retrieves the appropriate icon passes it as a component prop
    return <Button {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    children: "Default"
};
