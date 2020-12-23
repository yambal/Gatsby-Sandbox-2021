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
  <Button btn="success">Sucsess</Button>
  <Button btn="danger">Danger</Button>
  <Button btn="warning">Warning</Button>
  <Button btn="info">Info</Button>
  <Button btn="light">Light</Button>
  <Button btn="dark">Dark</Button>
  <Button btn="link">Link</Button>
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

export const Danger = Template.bind({});
Danger.args = {
  btn: 'danger'
};

export const Warning = Template.bind({});
Warning.args = {
  btn: 'warning'
};

export const Info = Template.bind({});
Info.args = {
  btn: 'info'
};

export const Light = Template.bind({});
Light.args = {
  btn: 'light'
};

export const Dark = Template.bind({});
Dark.args = {
  btn: 'dark'
};

export const Link = Template.bind({});
Link.args = {
  btn: 'link'
};