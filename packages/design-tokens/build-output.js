import { register } from '@tokens-studio/sd-transforms'
import StyleDictionary from 'style-dictionary'

register(StyleDictionary, {
  excludeParentKeys: true,
})

const sd = new StyleDictionary({
  // make sure to have source match your token files!
  // be careful about accidentally matching your package.json or similar files that are not tokens
  source: ['design-token.json'],
  preprocessors: ['tokens-studio'], // <-- since 0.16.0 this must be explicit
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      transforms: ['name/kebab'],
      buildPath: 'build/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
})

await sd.cleanAllPlatforms()
await sd.buildAllPlatforms()
