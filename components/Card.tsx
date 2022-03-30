import * as React from 'react'
import { Atoms, atoms } from '../themes/atoms.css'

type CardProps = {
  /**
   * The element used for the root node.
   */
  as?: 'article' | 'section' | 'aside'
  /**
   * The space inside the card.
   */
  space?: Atoms['padding']
  /**
   * The items to lay out in the card.
   */
  children: React.ReactNode
}

export function Card({
  children,
  space = 'medium',
  as = 'article',
}: CardProps) {
  const className = atoms({
    borderWidth: 'standard',
    borderStyle: 'solid',
    borderColor: 'borders',
    borderRadius: 'medium',
    padding: space,
    backgroundColor: 'closest',
  })

  return React.createElement(as, { className }, children)
}
