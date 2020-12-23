import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import FileInput from '.';
import { Props } from './types';

// const SizeMap: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export default {
    title: 'Components/Core/FileInput',
    component: FileInput,
    argTypes : {
        
    }
} as Meta;

const Template: Story<Props> = ({...args }) => {
    // retrieves the appropriate icon passes it as a component prop
    return <FileInput {...args} />;
};

export const Default = Template.bind({});


