import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'
import { vars } from './default.css'

const commonProperties = defineProperties({
  properties: {
    display: ['none', 'flex', 'grid'],
    flexDirection: ['column', 'row'],
    alignItems: {
      start: 'flex-start',
      center: 'center',
      end: 'flex-end',
      stretch: 'stretch',
    },
    justifyContent: {
      start: 'flex-start',
      center: 'center',
      end: 'flex-end',
      stretch: 'stretch',
    },
    flexWrap: ['wrap'],
    flexGrow: {
      yes: 1,
      no: 0,
    },
    flexShrink: {
      yes: 1,
      no: 0,
    },
    flexBasis: {
      '1/2': `${100 / 2}%`,
      '1/3': `${100 / 3}%`,
      '2/3': `${200 / 3}%`,
      '1/4': `${100 / 4}%`,
      '3/4': `${300 / 4}%`,
      '1/5': `${100 / 5}%`,
      '2/5': `${200 / 5}%`,
      '3/5': `${300 / 5}%`,
      '4/5': `${400 / 5}%`,
    },

    marginTop: vars.spacings,
    marginBottom: vars.spacings,
    marginLeft: vars.spacings,
    marginRight: vars.spacings,

    paddingTop: vars.spacings,
    paddingBottom: vars.spacings,
    paddingLeft: vars.spacings,
    paddingRight: vars.spacings,

    gap: vars.spacings,
    rowGap: vars.spacings,

    borderWidth: {
      standard: '1px',
    },

    borderStyle: ['solid'],

    borderColor: {
      borders: 'lightgray',
    },

    borderRadius: vars.radii,

    backgroundColor: {
      closest: 'white',
      farthest: 'gray',
    },

    width: ['100%'],
  },
  shorthands: {
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],

    padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  },
})


export const atoms = createSprinkles(
  commonProperties,
)
export type Atoms = Parameters<typeof atoms>[0]
