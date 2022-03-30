import * as React from 'react'
import { atoms, Atoms } from '../themes/atoms.css'

type StackProps = {
  /**
   * The element used for the root node.
   */
  as?: 'div' | 'span' | 'ol' | 'ul'
  /**
   * Defines the spacing between the items.
   */
  space?: Atoms['gap']
  /**
   * Sets the horizontal alignment of the items.
   */
  align?: Atoms['alignItems']
  /**
   * The items to lay out in the stack.
   */
  children: React.ReactNode
}

export function Stack({
  as = 'div',
  space = 'none',
  align = 'stretch',
  children,
}: StackProps) {
  const className = atoms({
    display: 'flex',
    flexDirection: 'column',
    gap: space,
    alignItems: align,
  })

  return React.createElement(as, { className }, children)
}
