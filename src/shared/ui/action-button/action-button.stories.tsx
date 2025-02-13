import { ActionButton } from './';
import { StoryObj } from '@storybook/react'
import '@/app/assets/styles/common.css'

export default {
  title: 'ActionButton',
  component: ActionButton,
};

type Story = StoryObj<typeof ActionButton>

export const Default: Story = {
  args: {
    children: <p>ActionButton</p>,
    type: 'button',
    colors: 'common',
    form: 'common',
    disabled: false
  }
}

export const Accent: Story = {
  args: {
    children: <p>ActionButton</p>,
    type: 'button',
    colors: 'accent',
    form: 'common',
    disabled: false
  }
}

export const Promo: Story = {
  args: {
    children: <p>ActionButton</p>,
    type: 'button',
    colors: 'promo',
    form: 'common',
    disabled: false
  }
}

export const Square: Story = {
  args: {
    children: <p>B</p>,
    type: 'button',
    colors: 'common',
    form: 'square',
    disabled: false
  }
}

export const Round: Story = {
  args: {
    children: <p>B</p>,
    type: 'button',
    colors: 'common',
    form: 'round',
    disabled: false
  }
}