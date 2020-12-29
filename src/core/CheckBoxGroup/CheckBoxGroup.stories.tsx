import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import CheckBoxGroup from '.';
import { Props } from './types';

const SizeMap: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];
const DisplayMap: Props['display'][] = ['inline', 'block'];
const lposMap: Props['labelPosition'][] = ['top','bottom','left','right']

export default {
    title: 'Components/Core/CheckBoxGroup',
    component: CheckBoxGroup,
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
        label:{
            control:{type:'text'}
        },
        labelPosition:{
            control: {
                type: 'select',
                options: Object.values(lposMap),
            },
        },
        display:{
            control: {
                type: 'select',
                options: Object.values(DisplayMap),
            },
        },
        showSelectAll:{ 
            control: { type: 'boolean'}  
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
    return <CheckBoxGroup {...args} />;
};

export const Default = Template.bind({});
Default.args={
    display:'block',
    label:"CheckBoxGroup Label",
    size:'S',
    checkBoxOptions: [
        {id:"1",value: 1,label: "1"},
        {id:"2",value: 2,label: "2"}
    ],
    showSelectAll:true
}


