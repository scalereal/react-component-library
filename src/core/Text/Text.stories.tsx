import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Text from "./Text"


export default {
    title: 'Components/Core/Text',
    component: Text,
    argTypes : {
        textColor: {
            control:'color'
        },
    }
} as Meta

const Template:Story = ({ textColor, lineThrough, uppercase, ...args}) => {
    return <Text textColor={textColor} lineThrough={lineThrough} uppercase={uppercase}{...args}> 
    Lorem Ipsum is simply dummy text
    </Text>
}

export const Default = Template.bind({});
Default.args = {
    textColor:"#435465"
}
