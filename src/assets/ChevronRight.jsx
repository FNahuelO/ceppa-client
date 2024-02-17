import React from 'react';

export default function ChevronRight({ width, height, color, transform }) {
  return (
    <svg
      width={width || '9'}
      height={height || '12'}
      viewBox="0 0 9 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: transform }}
    >
      <path
        d="M2.03036 0L0.620361 1.41L5.20036 6L0.620361 10.59L2.03036 12L8.03036 6L2.03036 0Z"
        fill={color || '#323232'}
      />
    </svg>
  );
}
