import Main from '.'
import { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof Main>

const stories: Meta<typeof Main> = {
  title: 'Main',
  component: Main
}

const Basic: Story = {
  args: {
    title: 'React Avançado',
    description: 'TypeScript, ReactJS, NextJS e Styled Components'
  }
}

export default stories
export { Basic }
