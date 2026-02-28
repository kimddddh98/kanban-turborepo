import { Meta, StoryObj } from '@storybook/react-vite'
import Color from './Color'

const primitiveColorOptions = ([
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
] as const).flatMap((color) =>
  color.vars.map((v) => {
    return `colors${color.name === 'Neutral' ? '' : '-' + color.name.toLowerCase()}-${v}`
  }),
)

const semanticColorGroups = [
  {
    name: 'Foreground',
    vars: ['fg-default', 'fg-muted', 'fg-subtle'] as const,
  },
  {
    name: 'Background',
    vars: ['bg-default', 'bg-muted', 'bg-subtle'] as const,
  },
  {
    name: 'Accent',
    vars: ['accent-default', 'accent-on-accent', 'accent-bg'] as const,
  },
  {
    name: 'Component',
    vars: [
      'button-primary-background',
      'button-primary-text',
      'card-background',
    ] as const,
  },
] as const

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

const SemanticColorAll = () => {
  return (
    <div className="flex flex-col gap-4">
      {semanticColorGroups.map((group) => (
        <div key={group.name} className="flex flex-col gap-4">
          <h2>{group.name}</h2>
          <div className="flex flex-wrap gap-4">
            {group.vars.map((variable) => (
              <Color key={variable} variable={variable} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export const Primitive: ColorStory = {
  name: 'Primitive Colors',
  render: () => <ColorAll />,
}

export const Semantic: ColorStory = {
  name: 'Semantic Colors',
  render: () => <SemanticColorAll />,
}

export const Playground: ColorStory = {
  args: {
    variable: 'colors-red-500',
  },
  argTypes: {
    variable: {
      control: 'select',
      options: [
        ...primitiveColorOptions,
        ...semanticColorGroups.flatMap((group) => group.vars),
      ],
    },
  },
}
