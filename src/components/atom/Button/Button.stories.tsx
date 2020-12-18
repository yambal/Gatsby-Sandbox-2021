import React, { FunctionComponent } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from "./Button"

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    bg: { control: 'color' },
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>

export const Primary = Template.bind({});

Primary.args = {
  bg: 'red',
  color: 'white'
};