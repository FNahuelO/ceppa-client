import React from 'react'

export default function VectorX({ width, height, color }) {
  return (
    <svg
      width={width || '12'}
      height={height || '12'}
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.06217 11.6666L0.333008 9.93748L4.27051 5.99998L0.333008 2.06248L2.06217 0.333313L5.99967 4.27081L9.93717 0.333313L11.6663 2.06248L7.72884 5.99998L11.6663 9.93748L9.93717 11.6666L5.99967 7.72915L2.06217 11.6666Z"
        fill={color || 'white'}
      />
    </svg>
  )
}
