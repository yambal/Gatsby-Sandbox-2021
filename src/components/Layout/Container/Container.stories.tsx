import React, { FunctionComponent } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';
import styled, { Box, css, th, up, down, between } from "@xstyled/styled-components"

import { Container, ContainerProps } from './Container';

const Sm = styled.spanBox`
  ${down('md', css`color:black;`)}
`

const Md = styled.spanBox`
  ${between('md', 'lg', css`color:black;`)}
`

const Lg = styled.spanBox`
  ${between('lg', 'xl', css`color:black;`)}
`

const Xl = styled.spanBox`
  ${up('xl', css`color:black;`)}
`

export default {
  title: 'Example/Container',
  component: Container,
  argTypes: {
    ref: {
      control: {
        type: null
      }
    },
    theme: {
      control: {
        type: null
      }
    },
    breakPoint: {
      type: { name: 'string', required: false },
      description: 'ブレークポイントに到達するまで100％幅',
      defaultValue: undefined,
      control: {
        type: 'select',
        options: ['', 'sm', 'md', 'lg', 'xl']
      }
    }
  },
} as Meta;

const Template: Story<ContainerProps> = (args) => {
  return (
    <div>
      <Container
        {...args}
        bg="rgba(0, 123, 255, .15)"
        border="solid 1px rgba(0, 123, 255, 0.2)"
        padding="15px"
        mb="15px"
      >
        Container
      </Container>
      <Box color="lightgray">
        Now: <Sm>sm</Sm>-<Md>md</Md>-<Lg>lg</Lg>-<Xl>xl</Xl>
      </Box>

    </div>
  )
}

export const Primary = Template.bind({});