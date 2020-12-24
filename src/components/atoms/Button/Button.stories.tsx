import React, { FunctionComponent } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from "./Button"
import { Box } from '@xstyled/styled-components';
import { Exsample } from '../Example/Example';

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
    theme: { 
      control: false
    },
    as: { control: 'text' },
    forwardedAs: { control: false },
    variant: {
      control: {
        type: "select",
        options: [undefined, 'primary', 'success', 'secondary', 'danger', 'warning', 'info', 'light', 'dark', 'link']
      }
    },
    size: {
      control: {
        type: "select",
        options: [undefined, "lg", "sm"]
      }
    }
  },
} as Meta;

export const Samples: Story<ButtonProps> = (args) => 
<Box col>
  <h1>Buttons</h1>
  <p>Buttons(ボタン)はフォームやダイアログなどのアクションにカスタムボタンスタイルを利用できます。 サイズや状態管理に対応しています。ボタンの使い方の例を示します。</p>
  <Exsample row>
    <Button variant="primary" >Premary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="success">Sucsess</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="warning">Warning</Button>
    <Button variant="info">Info</Button>
    <Button variant="light">Light</Button>
    <Button variant="dark">Dark</Button>
    <Button variant="link">Link</Button>
  </Exsample>
  <h2>Size</h2>
  <p>ボタンのサイズに lg,sm を適用すると変更できます。</p>
  <Exsample label='size="lg"'>
    <Button variant="primary" size="lg" >Premary</Button>
    <Button variant="secondary" size="lg">Secondary</Button>
    <Button variant="success" size="lg">Sucsess</Button>
    <Button variant="danger" size="lg">Danger</Button>
    <Button variant="warning" size="lg">Warning</Button>
    <Button variant="info" size="lg">Info</Button>
    <Button variant="light" size="lg">Light</Button>
    <Button variant="dark" size="lg">Dark</Button>
    <Button variant="link" size="lg">Link</Button>
  </Exsample>
  <Exsample label='size="sm"'>
    <Button variant="primary" size="sm" >Premary</Button>
    <Button variant="secondary" size="sm">Secondary</Button>
    <Button variant="success" size="sm">Sucsess</Button>
    <Button variant="danger" size="sm">Danger</Button>
    <Button variant="warning" size="sm">Warning</Button>
    <Button variant="info" size="sm">Info</Button>
    <Button variant="light" size="sm">Light</Button>
    <Button variant="dark" size="sm">Dark</Button>
    <Button variant="link" size="sm">Link</Button>
  </Exsample>
  <Exsample label='display="block"'>
    <Button variant="primary" display="block">Premary</Button>
    <Button variant="secondary" display="block">Secondary</Button>
  </Exsample>
  <h2>Disabled state</h2>
  <Exsample label="disabled">
    <Button variant="primary" disabled>Premary</Button>
    <Button variant="secondary" disabled>Secondary</Button>
  </Exsample>
</Box>

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary'
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success'
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger'
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning'
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info'
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light'
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark'
};

export const Link = Template.bind({});
Link.args = {
  variant: 'link'
};