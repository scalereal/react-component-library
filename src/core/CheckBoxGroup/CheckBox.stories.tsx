import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import CheckBoxGroup from '.';
import { Props } from './types';


export default {
    title: 'Components/Core/CheckBoxGroup',
    component: CheckBoxGroup,
    argTypes : {
        // size : {
        //     control: {
        //         type: 'select',
        //         options: Object.values(SizeMap),
        //     },
        // },
        // label:{
        //     control:{type:'text'}
        // },
        // disabled:{
        //     control:{type:'boolean'}
        // },
        // hasError:{
        //     control: { type: 'boolean'}
        // },
        // errorText:{
        //     control:{type:'text'}
        // },
        // bgColor : {
        //     control:'color'
        // },
        // textColor: {
        //     control:'color'
        // },
        // hoverBgColor: {
        //     control:'color'
        // },
        // hoverTextColor: {
        //     control:'color'
        // },
        // hoverShadowColor: {
        //     control:'color'
        // },
        // hoverTextShadowColor: {
        //     control:'color'
        // },
        // hoverEffect:{ 
        //     control: { type: 'boolean'}  
        // },
        
    }
} as Meta;

const Template: Story<Props> = ({...args }) => {
    // retrieves the appropriate icon passes it as a component prop
    return <CheckBoxGroup {...args} />;
};

export const Default = Template.bind({});
Default.args={
    display:'block',
    options: [
        {value: 1,label: "1"},
        {value: 2,label: "2"}
    ]
}


