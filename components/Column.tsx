import * as React from 'react'
import { Atoms, atoms } from '../themes/atoms.css'

type ColumnProps = {
  /**
   * The width of the column.
   */
  width?: Atoms['flexBasis'] | 'fluid' | 'content'
  /**
   * The content of the column.
   */
  children: React.ReactNode
}

export function Column({ width = 'fluid', children }: ColumnProps) {
  let className

  if (width === 'fluid') {
    className = atoms({
      width: '100%',
    })
  } else if (width === 'content') {
    className = atoms({
      flexGrow: 'no',
      flexShrink: 'yes',
    })
  } else {
    className = atoms({
      flexGrow: 'no',
      flexShrink: 'no',
      flexBasis: width,
    })
  }

  return React.createElement('div', { className }, children)
}
