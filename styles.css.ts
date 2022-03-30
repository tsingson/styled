import { globalStyle } from '@vanilla-extract/css'

// reset to a sensible box-model
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

// reset all margins in favor of structural components
globalStyle('*', {
  margin: 0,
})

// allow percentage-based heights
globalStyle('html', {
  height: '100%',
})

globalStyle('body', {
  minHeight: '100%',
  backgroundColor: 'white',
  fontFamily: 'system-ui, sans-serif',
  WebkitFontSmoothing: 'antialiased',
  lineHeight: 1.5,
})

// remove that annoying bottom margin
globalStyle('img, picture, video, canvas', {
  display: 'block',
  maxWidth: '100%',
})

// make controls inherit the fonts
globalStyle('input, button, textarea, select', {
  font: 'inherit',
})

// avoid text overflows
globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
})

globalStyle('ul[class], ol[class]', {
  listStyle: 'none',
})

// create a root stacking context
globalStyle('#__next ', {
  isolation: 'isolate',
})
