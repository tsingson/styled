import * as React from 'react'

type PlaceholderProps = {
  height?: number
  width?: 'auto' | number
  label?: React.ReactNode
}

export function Placeholder({
  label,
  width = 'auto',
  height = 120,
}: PlaceholderProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        border: '2px solid hsla(0, 0%, 20%, 0.4)',
        color: 'hsla(0, 0%, 20%, 0.7)',
        backgroundColor: 'hsla(0, 0%, 20%, 0.04)',
        padding: '2px 4px',
        width,
        height,
      }}
    >
      {label ? (
        label
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          <line
            style={{ strokeWidth: '2px', stroke: 'hsla(0, 0%, 20%, 0.15)' }}
            x1={0}
            y1={0}
            x2="100%"
            y2="100%"
          />
          <line
            style={{ strokeWidth: '2px', stroke: 'hsla(0, 0%, 20%, 0.15)' }}
            x1="100%"
            y1={0}
            x2={0}
            y2="100%"
          />
        </svg>
      )}
    </div>
  )
}
