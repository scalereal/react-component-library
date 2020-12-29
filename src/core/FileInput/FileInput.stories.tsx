import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import FileInput from '.';
import { Props } from './types';

const SizeMap: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export default {
    title: 'Components/Core/FileInput',
    component: FileInput,
    argTypes : {
        size:{
            control: {
                type: 'select',
                options: Object.values(SizeMap),
            },
        },
        hoverEffect:{ 
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
        textColor : {
            control:'color'
        },
        btnBgColor: {
            control:'color'
        },
        btnTextColor: {
            control:'color'
        },
        borderColor: {
            control:'color'
        },
        btnHoverBorderColor: {
            control:'color'
        },
        btnHoverBgColor:{
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
        onChange:{
            table:{
              disable:true
            }
        },
    }
} as Meta;

const Template: Story<Props> = ({...args }) => {
    // retrieves the appropriate icon passes it as a component prop
    return <FileInput {...args} />;
};

export const Default = Template.bind({});


