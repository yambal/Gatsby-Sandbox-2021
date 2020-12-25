import React, { FunctionComponent } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';

import { Icon, IconProps } from "./Icon"
import { Box } from '@xstyled/styled-components';
import { Exsample } from '../Example/Example';
import {  } from '@fortawesome/fontawesome-svg-core';

export default {
  title: 'Atom/Icon',
  component: Icon
}

const Template: Story<IconProps> = (args) => <Icon {...args} />

export const FasCoffee = Template.bind({});
FasCoffee.args = {
  prefix: "fas",
  iconName: "coffee",
  size: '6x'
};

export const FarComment = Template.bind({});
FarComment.args = {
  prefix: "far",
  iconName: "comment",
  size: '6x'
};

export const Error = Template.bind({});
Error.args = {
  prefix: "far",
  iconName: "coffee",
  size: '6x'
};