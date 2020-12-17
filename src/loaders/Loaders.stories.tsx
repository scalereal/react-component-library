import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import loaderTheme from "../theme/loader/index"
import CircleLoader from './loaders/CircleLoader';

const defaultColor = loaderTheme.defaultColor;

export default {
    title: 'Components/Loaders/CircleLoader',
    component: CircleLoader
} as Meta;

const Loader:Story = ({size, color, ...args}) => {
    return <CircleLoader size={size} color={color} {...args}/>
};

export const Default  = Loader.bind({});
Default.args = {
    size:'S',
    color:defaultColor
}
