import * as React from 'react'
import { atoms, Atoms } from '../themes/atoms.css'

type PadProps = {
  /**
   * The amount of padding to apply.
   */
  space?: Atoms['padding']
  /**
   * The content to pad.
   */
  children: React.ReactNode
}

export function Pad({ space = 'medium', children }: PadProps) {
  const className = atoms({
    padding: space,
  })

  return <div className={className}>{children}</div>
}
