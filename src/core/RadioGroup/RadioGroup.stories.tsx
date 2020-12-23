import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import RadioGroup from '.';
import { Props } from './types';

// const SizeMap: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export default {
    title: 'Components/Core/RadioGroup',
    component: RadioGroup,
    argTypes : {
        
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
    ]
}


