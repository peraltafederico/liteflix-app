import React, { ReactElement } from 'react'
import * as Styled from './BaseButton.styles'

interface Props {
  onClick: () => void
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean
}

export default function BaseButton({
  onClick,
  children,
  disabled,
  type = 'submit',
  ...props
}: Props): ReactElement {
  return (
    <Styled.Container
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </Styled.Container>
  )
}
