import Tes from './Tes'
import './main.css'
import type { Meta } from '@storybook/html'

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Tes',
  tags: ['autodocs'],
  render: () => {
    return Tes()
  },
} satisfies Meta<null>

export default meta
export const Primary = {}
