import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import RadioGroup from '.';
import { Props } from './types';

const SizeMap: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];
const lposMap: Props['labelPosition'][] = ['top','bottom','left','right']
const DisplayMap: Props['display'][] = ['inline', 'block'];


export default {
    title: 'Components/Core/RadioGroup',
    component: RadioGroup,
    argTypes : {
        size : {
            control: {
                type: 'select',
                options: Object.values(SizeMap),
            },
        },
        display:{
            control: {
                type: 'select',
                options: Object.values(DisplayMap),
            },
        },
        labelPosition:{
            control: {
                type: 'select',
                options: Object.values(lposMap),
            },
        },
        mainLabel:{
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
        hoverBgColor: {
            control:'color'
        },
        checkedBgColor : {
            control:'color'
        },
        hoverCheckedBgColor : {
            control:'color'
        },
        labelColor: {
            control:'color'
        },
        hoverLabelColor: {
            control:'color'
        },
        hoverEffect:{ 
            control: { type: 'boolean'}  
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
    return <RadioGroup {...args} />;
};

export const Default = Template.bind({});
Default.args={
    errorText: '',
    hasError:false,
    hoverEffect:true,
    options:[
        {id:"1",label:"1",value:1},
        {id:"2",label:"2",value:2},
        {id:"3",label:"3",value:3}
    ],
    mainLabel:'radio Group Label'
}


