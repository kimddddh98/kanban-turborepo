import type { Meta, StoryObj } from '@storybook/react-vite'

/**
 * Design Tokens(`@repo/design-tokens`)의 CSS 변수 기준 컬러 정의 스토리입니다.
 * `packages/design-tokens/build/css/variables.css` 에 정의된 --colors-* 변수를 시각화합니다.
 */

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

const semanticColors = [
  { token: 'fg-default', label: 'Foreground Default' },
  { token: 'fg-muted', label: 'Foreground Muted' },
  { token: 'fg-subtle', label: 'Foreground Subtle' },
  { token: 'bg-default', label: 'Background Default' },
  { token: 'bg-muted', label: 'Background Muted' },
  { token: 'bg-subtle', label: 'Background Subtle' },
  { token: 'accent-default', label: 'Accent Default' },
  { token: 'accent-on-accent', label: 'Accent on Accent' },
  { token: 'accent-bg', label: 'Accent Background' },
  { token: 'button-primary-background', label: 'Button Primary BG' },
  { token: 'button-primary-text', label: 'Button Primary Text' },
  { token: 'card-background', label: 'Card Background' },
] as const

function ColorSwatch({ variable, label }: { variable: string; label: string }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 8,
          backgroundColor: `var(--${variable})`,
          border:
            variable.includes('white') || variable.includes('100')
              ? '1px solid var(--colors-gray-300)'
              : undefined,
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}
      />
      <span
        style={{
          fontSize: 11,
          color: 'var(--fg-subtle)',
          maxWidth: 72,
          textAlign: 'center',
          wordBreak: 'break-all',
        }}
      >
        {label}
      </span>
    </div>
  )
}

function ColorsAll() {
  return (
    <div
      style={{
        padding: 24,
        fontFamily: 'var(--font-families-body)',
        color: 'var(--fg-default)',
      }}
    >
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Design Tokens — Colors</h1>
      {colorPalettes.map((palette) => (
        <section key={palette.name} style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 18, marginBottom: 16, fontWeight: 700 }}>
            {palette.name}
          </h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            {palette.vars.map((v) => {
              const varName =
                typeof v === 'number'
                  ? `colors-${palette.name.toLowerCase()}-${v}`
                  : `colors-${v}`
              return (
                <ColorSwatch
                  key={varName}
                  variable={varName}
                  label={String(v)}
                />
              )
            })}
          </div>
        </section>
      ))}

      <section style={{ marginTop: 48, marginBottom: 40 }}>
        <h2 style={{ fontSize: 18, marginBottom: 16, fontWeight: 700 }}>
          Semantic (fg / bg / accent)
        </h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          {semanticColors.map(({ token, label }) => (
            <ColorSwatch key={token} variable={token} label={label} />
          ))}
        </div>
      </section>
    </div>
  )
}

const meta = {
  title: 'Design Tokens/Colors',
  component: ColorsAll,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '`@repo/design-tokens`에서 빌드된 CSS 변수(--colors-*, fg-*, bg-*, accent-* 등)를 시각화합니다.',
      },
    },
  },
} satisfies Meta<typeof ColorsAll>

export default meta

type Story = StoryObj<typeof meta>

export const AllPalettes: Story = {
  name: '전체 팔레트',
  render: () => <ColorsAll />,
}
