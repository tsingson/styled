import * as React from 'react'
import useSize from '@react-hook/size'
import { atoms, Atoms } from '../themes/atoms.css'

type ColumnsProps = {
  /**
   * The element used for the root node.
   */
  as?: 'div' | 'span' | 'ol' | 'ul'
  /**
   * Defines the spacing between the items.
   */
  space?: Atoms['gap']
  /**
   * Collapse items to a stack below this size.
   */
  collapseBelow?: number
  /**
   * Sets the horizontal alignment of the items.
   */
  align?: Atoms['justifyContent']
  /**
   * Sets the vertical alignment of the items.
   */
  alignY?: Atoms['alignItems']
  /**
   * The columns.
   */
  children: React.ReactNode
}

export function Columns({
  as = 'div',
  space = 'none',
  align = 'start',
  alignY = 'start',
  collapseBelow,
  children,
}: ColumnsProps) {
  const target = React.useRef(null)
  const [width] = useSize(target)

  // default set up
  let flexDirection: Atoms['flexDirection'] = 'row'
  let justifyContent: Atoms['justifyContent'] = align
  let alignItems: Atoms['alignItems'] = alignY
  let ref = null

  if (collapseBelow !== undefined && typeof collapseBelow === 'number') {
    // switch orientation and swap alignment axis if collapsed
    if (width < collapseBelow) {
      flexDirection = 'column'
      justifyContent = alignY
      alignItems = align
    }

    // attach ref only if `collapseBelow` is given
    ref = target
  }

  const className = atoms({
    display: 'flex',
    flexDirection,
    gap: space,
    justifyContent,
    alignItems,
  })

  return React.createElement(as, { ref, className }, children)
}
