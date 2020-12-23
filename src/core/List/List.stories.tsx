import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Text from "../Text/Text"
import List  from './List';
import { ListProps } from './types';

const variant: ListProps['variant'][] = ['horizontal', 'vertical'];

export default {
    title: 'Components/Core/List',
    component: List,
    argTypes : {
        variant:{
        control: {
            type: 'select',
            options: Object.values(variant),
          },
        },
    },
} as Meta

const Template:Story = ({ variant,...args}) => {
    return (
    <List variant={variant}  {...args} >
        <Text> Item 1</Text>
        <Text> Item 2</Text>
        <Text> Item 3</Text>
    </List>
    )
}

export const Default = Template.bind({});
Default.args = {
   variant:'vertical'
}
