import React, { ReactElement, CSSProperties } from 'react'
import * as Styled from './BaseButton.styles'

interface Props {
  onClick: () => void
  children: React.ReactNode
  disabled?: boolean
  className?: string
}

export default function BaseButton({
  onClick,
  children,
  disabled,
  className,
  ...props
}: Props): ReactElement {
  return (
    <Styled.Container
      {...props}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Styled.Container>
  )
}
