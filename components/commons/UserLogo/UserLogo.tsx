import React, { ReactElement } from 'react'

interface Props {
  state?: 'normal' | 'active' | 'disabled'
}

export default function UserLogo({ state = 'normal' }: Props): ReactElement {
  const colors = {} as { background: string; icon: string }

  switch (state) {
    case 'active':
      colors.background = '#CE00FF'
      colors.icon = '#F5A623'
      break
    case 'disabled':
      colors.background = '#9B9B9B'
      colors.icon = '#4A4A4A'
      break
    default:
      colors.background = '#003BFF'
      colors.icon = '#4A90E2'
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
    >
      <g fill="none" fillRule="evenodd">
        <circle cx="12.5" cy="12.5" r="12.5" fill={colors.background} />
        <path
          fill={colors.icon}
          d="M12.305 15.958l-2.563-1.48a.487.487 0 0 1-.243-.422v-3.01L6 9.062v6.827c0 .29.155.558.406.703l5.899 3.406v-4.04zm3.456-4.914v3.013a.487.487 0 0 1-.243.421L12.95 15.96V20l5.903-3.408a.811.811 0 0 0 .406-.703V9.06l-3.5 1.984zm-5.862-.553l2.487-1.436a.488.488 0 0 1 .487 0l2.465 1.423 3.534-2-5.837-3.37a.81.81 0 0 0-.811 0L6.38 8.484l3.519 2.008z"
        />
      </g>
    </svg>
  )
}
