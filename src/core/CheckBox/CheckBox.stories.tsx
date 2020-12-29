import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import CheckBox from '.';
import { Props } from './types';

const SizeMap: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];
const lposMap: Props['labelPosition'][] = ['top','bottom','left','right']

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
        fontSize:{
            control: {
                type: 'select',
                options: Object.values(SizeMap),
            },
        },
        labelPosition:{
            control: {
                type: 'select',
                options: Object.values(lposMap),
            },
        },
        label:{
            control:{type:'text'}
        },
        value:{
            control:{type:'text'}
        },
        hoverEffect:{ 
            control: { type: 'boolean'}  
        },
        labelHoverEffect:{ 
            control: { type: 'boolean'}  
        },
        disabled:{
            control:{type:'boolean'}
        },
        hasError:{
            control: { type: 'boolean'}
        },
        errorText:{
            control:{type:'text'}
        },
        bgColor : {
            control:'color'
        },
        labelColor: {
            control:'color'
        },
        hoverBgColor: {
            control:'color'
        },
        labelHoverColor: {
            control:'color'
        },
        hoverShadowColor: {
            control:'color'
        },
        ref:{
            table:{
              disable:true
            }
        },
        theme:{
            table:{
              disable:true
            }
        },
        
    }
} as Meta;

const Template: Story<Props> = ({...args }) => {
    // retrieves the appropriate icon passes it as a component prop
    return <CheckBox {...args} />;
};

export const Default = Template.bind({});


