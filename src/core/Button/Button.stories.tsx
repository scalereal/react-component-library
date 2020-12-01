import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import styled from 'styled-components';
import Button, { ButtonProps } from '.';

// import DownloadIcon from '../../icons/Download';
const ButtonType={defualt:'default', danger:'danger' , ghost:'ghost' , secondary:'secondary'};
const ButtonSize={defualt:'default', large:'large' , small:'small'};

export default {
    title: 'Components/Core/Button',
    component: Button,
    argTypes : {
        type:{
        control: {
            type: 'select',
            options: Object.keys(ButtonType),
          },
        },
    backgroundColor: { control: 'color' },
    size : {
        control: {
            type: 'select',
            options: Object.keys(ButtonSize),
          },
    },
    disabled :{
        control: {
            type: 'boolean'
        }
    },

        // children: 'Default Button',
    },
} as Meta;

const Template: Story<ButtonProps> = ({ disabled, size, backgroundColor, type, ...args }) => {
    // retrieves the appropriate icon passes it as a component prop
    const selectedType = ButtonType[type];
    const Color=backgroundColor;
    const Size = ButtonSize[size];
    const Disable = disabled;
    return <Button disabled={Disable} size={Size} backgroundColor={Color} type={selectedType} {...args} />;
  };
// const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default Button',
};

// export const DangerButton = Template.bind({});
// DangerButton.args = {
//     children: 'Danger Button',
//     type: 'danger'
// };

// export const Ghost = Template.bind({});
// Ghost.args = {
//     children: 'Ghost Button',
//     type: 'ghost'
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//     children: 'Secondary Button',
//     type: 'secondary'
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//     children: 'Disabled Button',
//     disabled: true
// };

// export const Loading = Template.bind({});
// Loading.args = {
//     children: 'Button',
//     loading: true
// };

// export const WithIcon = Template.bind({});
// WithIcon.args = {
//     //   icon: DownloadIcon,
//     children: 'Download'
// };

const ButtonRow = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
    & > * {
        margin-right: 10px;
    }
`;

export const Sizes = () => {
    return (
        <>
            <ButtonRow>
                <Button size="large">Large</Button>
                <Button size="default">Default</Button>
                <Button size="small">Small</Button>
            </ButtonRow>
            <ButtonRow>
                <Button type="danger" size="large">
                    Large
                </Button>
                <Button type="danger" size="default">
                    Default
                </Button>
                <Button type="danger" size="small">
                    Small
                </Button>
            </ButtonRow>
            <ButtonRow>
                <Button type="ghost" size="large">
                    Large
                </Button>
                <Button type="ghost" size="default">
                    Default
                </Button>
                <Button type="ghost" size="small">
                    Small
                </Button>
            </ButtonRow>
            <ButtonRow>
                <Button type="secondary" size="large">
                    Large
                </Button>
                <Button type="secondary" size="default">
                    Default
                </Button>
                <Button type="secondary" size="small">
                    Small
                </Button>
            </ButtonRow>
            <ButtonRow>
                <Button loading disabled size="large">
                    Large
                </Button>
                <Button loading disabled size="default">
                    Default
                </Button>
                <Button loading disabled size="small">
                    Small
                </Button>
            </ButtonRow>
        </>
    );
};
