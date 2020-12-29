import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Input from "./Input"

export default {
    title: 'Components/Core/Input',
    component: Input,
    argTypes: {
        textColor: {
            control: 'color'
        },
        borderColor: {
            control: 'color'
        },
        disabledColor: {
            control: 'color'
        },
        backgroundColor: {
            control: 'color'
        },
        placeHolderColor: {
            control: 'color'
        },
        preffixBackgroundColor: {
            control: 'color'
        },
        suffixBackgroundColor: {
            control: 'color'
        }
    }
} as Meta;

const Template: Story = ({
    suffix,
    prefix,
    required,
    disabled,
    fullWidth,
    textColor,
    borderColor,
    disabledColor,
    backgroundColor,
    placeHolderColor,
    preffixBackgroundColor,
    suffixBackgroundColor,
    ...args
}) => {
    return (
        <Input
            id="input"
            type="email"
            fullWidth={fullWidth}
            disabled={disabled}
            required={required}
            placeholder="Enter Email Address"
            prefix={prefix}
            suffix={suffix}
            textColor={textColor}
            borderColor={borderColor}
            disabledColor={disabledColor}
            backgroundColor={backgroundColor}
            placeHolderColor={placeHolderColor}
            preffixBackgroundColor={preffixBackgroundColor}
            suffixBackgroundColor={suffixBackgroundColor}
            {...args}
        ></Input>
    );
};

export const Default = Template.bind({});
Default.args = {

}


