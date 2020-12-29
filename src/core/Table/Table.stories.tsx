import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Table from '.';
import { Props } from './types';


export default {
    title: 'Components/Core/Table',
    component: Table,
    argTypes : {
        hoverEffect:{ 
            control: { type: 'boolean'}  
        },
        thBgColor : {
            control:'color'
        },
        thTextColor: {
            control:'color'
        },
        hoverTrBgColor: {
            control:'color'
        },
        borderColor:{
            control:'color'
        },
        nthTrBgColor:{
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
    return <Table {...args} />;
};

export const Default = Template.bind({});
Default.args={
    thData:[{id:1,data:'ID'},{id:2,data:'EmployeeID'},{id:3,data:'Name'}],
    tdData:[
        {trId:1,trData:[{tdId:1,tdData:'1'},{tdId:2,tdData:'2'},{tdId:3,tdData:'3'}]},
        {trId:2,trData:[{tdId:1,tdData:'1'},{tdId:2,tdData:'2'},{tdId:3,tdData:'3'}]},
        {trId:3,trData:[{tdId:1,tdData:'1'},{tdId:2,tdData:'2'},{tdId:3,tdData:'3'}]},
        {trId:4,trData:[{tdId:1,tdData:'1'},{tdId:2,tdData:'2'},{tdId:3,tdData:'3'}]},
    ],
    hoverEffect:true
}


