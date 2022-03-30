import * as React from 'react'
import { atoms, Atoms } from '../themes/atoms.css'

type AutoGridProps = {
  /**
   * The element used for the root node.
   */
  as?: 'div' | 'section' | 'ul' | 'ol'

  /**
   * The minimum width for items to shrink to before the grid starts wrapping to make space.
   */
  minItemWidth: number

  /**
   * The gap between the items or the column gap if spaceY is present.
   */
  space?: Atoms['gap']

  /**
   * The row gap between the items.
   */
  spaceY?: Atoms['gap']

  /**
   * Items inside the AutoGrid.
   */
  children: React.ReactNode
}

export function AutoGrid({
  as = 'section',
  space = 'none',
  spaceY,
  children,
  minItemWidth,
}: AutoGridProps) {
  const className = atoms({
    display: 'grid',
    gap: space,
    rowGap: spaceY,
  })

  const style: React.CSSProperties = {
    gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${minItemWidth}px), 1fr))`,
  }

  return React.createElement(as, { className, style }, children)
}
