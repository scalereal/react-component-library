import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Radio from '.';
import { Props } from './types';

const SizeMap: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];
const lposMap: Props['labelPosition'][] = ['top','bottom','left','right']


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
        labelPosition:{
            control: {
                type: 'select',
                options: Object.values(lposMap),
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
    return <Radio {...args} />;
};

export const Default = Template.bind({});
Default.args={
    errorText: '',
    hasError:false,
    hoverEffect:true
}


