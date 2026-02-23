import type { Preview } from '@storybook/react-vite'
import '../../design-tokens/build/css/variables.css'
import './theme.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
