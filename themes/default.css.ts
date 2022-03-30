import { createGlobalTheme } from '@vanilla-extract/css'
import * as tokens from './tokens'

export const vars = createGlobalTheme(':root', {
  ...tokens,
})
