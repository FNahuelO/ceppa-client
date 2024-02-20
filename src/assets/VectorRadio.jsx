import React from 'react'

export default function VectorRadio({ width, height, color }) {
  return (
    <svg
      width={width || '11'}
      height={height || '10'}
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="5.66675" cy="5" r="5" fill={color || '#D9D9D9'} />
    </svg>
  )
}
