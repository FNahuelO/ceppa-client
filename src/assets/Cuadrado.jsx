import React from 'react'

export default function Cuadrado({ idx, width, height }) {
  return (
    <svg
      width={width || '20'}
      height={height || '20'}
      viewBox="0 0 26 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: idx ? 'scale(1.4)' : '', margin: idx ? '0 3px' : '' }}
    >
      <rect width={width || '20'} height={height || '20'} fill="#8473B4" />
    </svg>
  )
}
