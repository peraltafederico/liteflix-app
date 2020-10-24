import React, { ReactElement } from 'react'
import * as Styled from './BaseButton.styles'

interface Props {
  onClick: () => void
  children: React.ReactNode
  disabled?: boolean
}

export default function BaseButton({
  onClick,
  children,
  disabled,
  ...props
}: Props): ReactElement {
  return (
    <Styled.Container disabled={disabled} onClick={onClick} {...props}>
      {children}
    </Styled.Container>
  )
}
