import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Radio from '.';
import { RadioProps } from './types';

const SizeMap: RadioProps['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export default {
    title: 'Components/Core/Radio',
    component: Radio,
    argTypes : {
        size : {
            control: {
                type: 'select',
                options: Object.values(SizeMap),
            },
        },
        label:{
            control:{type:'text'}
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
        hoverLabelColor: {
            control:'color'
        },
        hoverShadowColor: {
            control:'color'
        },
        // hoverTextShadowColor: {
        //     control:'color'
        // },
        hoverEffect:{ 
            control: { type: 'boolean'}  
        },
        
    }
} as Meta;

const Template: Story<RadioProps> = ({...args }) => {
    // retrieves the appropriate icon passes it as a component prop
    return <Radio {...args} />;
};

export const Default = Template.bind({});
Default.args={
    errorText: '',
    hasError:false,
    hoverEffect:true
}


