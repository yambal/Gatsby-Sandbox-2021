import React, { FunctionComponent } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from "./Button"

export default {
  title: 'Atom/Button',
  component: Button,
  argTypes: {
    color: { 
      description: 'Style Props',
      table: {
        type: { 
            summary: 'Style Props', 
            detail: 'See https://xstyled.dev/docs/style-props/' 
        },
      },
      control: 'color',
    },
    bg: {
      description: 'Style Props',
      table: {
        type: { 
            summary: 'Style Props', 
            detail: 'See https://xstyled.dev/docs/style-props/' 
        },
      },
      control: 'color'
    },
    theme: { control: false },
    as: { control: 'text' },
    forwardedAs: { control: false },
  },
} as Meta;

export const Samples: Story<ButtonProps> = (args) => <>
  <Button btn="primary" {...args} >Button</Button>
  <Button btn="secondary">Secondary</Button>
  <Button btn="success">Button</Button>
  <Button btn="danger">Button</Button>
  <Button btn="warning">Button</Button>
  <Button btn="info">Button</Button>
  <Button btn="light">Button</Button>
  <Button btn="dark">Button</Button>
  <Button btn="link">Button</Button>
</>

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>

export const Primary = Template.bind({});
Primary.args = {
  btn: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  btn: 'secondary'
};

export const Success = Template.bind({});
Success.args = {
  btn: 'success'
};