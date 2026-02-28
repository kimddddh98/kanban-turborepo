import { Meta, StoryObj } from '@storybook/react-vite'
import Color from './Color'

const colorPalettes = [
  { name: 'Neutral', vars: ['black', 'white'] as const },
  {
    name: 'Gray',
    vars: [100, 200, 300, 400, 500, 600, 700, 800, 900] as const,
  },
  {
    name: 'Red',
    vars: [100, 200, 300, 400, 500, 600, 700, 800, 900] as const,
  },
  {
    name: 'Orange',
    vars: [100, 200, 300, 400, 500, 600, 700, 800, 900] as const,
  },
  {
    name: 'Yellow',
    vars: [100, 200, 300, 400, 500, 600, 700, 800, 900] as const,
  },
  {
    name: 'Green',
    vars: [100, 200, 300, 400, 500, 600, 700, 800, 900] as const,
  },
  {
    name: 'Teal',
    vars: [100, 200, 300, 400, 500, 600, 700, 800, 900] as const,
  },
  {
    name: 'Blue',
    vars: [100, 200, 300, 400, 500, 600, 700, 800, 900] as const,
  },
  {
    name: 'Indigo',
    vars: [100, 200, 300, 400, 500, 600, 700, 800, 900] as const,
  },
  {
    name: 'Purple',
    vars: [100, 200, 300, 400, 500, 600, 700, 800, 900] as const,
  },
  {
    name: 'Pink',
    vars: [100, 200, 300, 400, 500, 600, 700, 800, 900] as const,
  },
] as const
const meta: Meta<typeof Color> = {
  component: Color,
  parameters: {
    // 문서 페이지에서 기본으로 보여줄 레이아웃/배경을 팀 규칙으로 고정 가능
    layout: 'centered',
  },
}

export default meta

type ColorStory = StoryObj<typeof Color>

const ColorAll = () => {
  return (
    <div className="flex flex-col gap-4">
      {colorPalettes.map((color) => (
        <div key={color.name} className="flex flex-col gap-4">
          <h2>{color.name}</h2>
          <div className="flex flex-wrap gap-4">
            {color.vars.map((v) => (
              <Color
                key={v}
                variable={`colors${color.name === 'Neutral' ? '' : '-' + color.name.toLowerCase()}-${v}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export const All: ColorStory = {
  name: 'Semantic Colors',
  render: () => <ColorAll />,
}

export const Playground: ColorStory = {
  args: {
    variable: 'colors-red-500',
  },
  argTypes: {
    variable: {
      control: 'select',
      options: colorPalettes.flatMap((color) =>
        color.vars.map(
          (v) =>
            `colors${color.name === 'Neutral' ? '' : '-' + color.name.toLowerCase()}-${v}`,
        ),
      ),
    },
  },
}
