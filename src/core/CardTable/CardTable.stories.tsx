import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import CardTable from '.';
import Avatar from '../Avatar';
import Text from '../Text/Text';
import { Props } from './types';


export default {
    title: 'Components/Core/CardTable',
    component: CardTable,
    argTypes : {
        hoverEffect:{ 
            control: { type: 'boolean'}  
        },
        borderColor : {
            control:'color'
        },
        headerBgColor: {
            control:'color'
        },
        hoverBorderColor: {
            control:'color'
        },
        hoverShadowColor:{
            control:'color'
        },
        trBgColor:{
            control:'color'
        },
        nthTrBgColor:{
            control:'color'
        },
        hoverTrBgColor:{
            control:'color'
        }
        
    }
} as Meta;

const Template: Story<Props> = ({...args }) => {
    // retrieves the appropriate icon passes it as a component prop
    return <CardTable {...args} />;
};

export const Default = Template.bind({});
Default.args={
    thData:[{id:1,data:<Text textWeight='strong'>User</Text>},{id:2,data:<Text textWeight='strong'>Last Login</Text>},{id:3,data:<Text textWeight='strong'>Department</Text>},{id:3,data:<Text textWeight='strong'>Status</Text>}],
    tdData:[
        {trId:1,trData:[{tdId:1,tdData:<><Avatar size='XXS' display='inline-block' res="Akshay Kumar"/><Text textSize='XS'>Akshay Kumar</Text></>},
            {tdId:2,tdData:<Text textSize='XS'>sep 20 2019</Text>},{tdId:3,tdData:<Text textSize='XS'>Development</Text>},{tdId:4,tdData:<Text textSize='XS' textColor='blue'>active</Text>}]},
        {trId:2,trData:[{tdId:1,tdData:<><Avatar size='XXS' display='inline-block' res="Akshay Kumar"/><Text textSize='XS'>Akshay Kumar</Text></>},
            {tdId:2,tdData:<Text textSize='XS'>sep 20 2019</Text>},{tdId:3,tdData:<Text textSize='XS'>Development</Text>},{tdId:4,tdData:<Text textSize='XS' textColor='blue'>active</Text>}]},
        {trId:3,trData:[{tdId:1,tdData:<><Avatar size='XXS' display='inline-block' res="Akshay Kumar"/><Text textSize='XS'>Akshay Kumar</Text></>},
            {tdId:2,tdData:<Text textSize='XS'>sep 20 2019</Text>},{tdId:3,tdData:<Text textSize='XS'>Development</Text>},{tdId:4,tdData:<Text textSize='XS' textColor='blue'>active</Text>}]},
        {trId:4,trData:[{tdId:1,tdData:<><Avatar size='XXS' display='inline-block' res="Akshay Kumar"/><Text textSize='XS'>Akshay Kumar</Text></>},
            {tdId:2,tdData:<Text textSize='XS'>sep 20 2019</Text>},{tdId:3,tdData:<Text textSize='XS'>Development</Text>},{tdId:4,tdData:<Text textSize='XS' textColor='blue'>active</Text>}]},
    ],
    hoverEffect:true
}


