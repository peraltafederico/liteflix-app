import React, { ReactElement } from 'react'
import * as Styled from './MovieCard.styles'

interface Props {
  children: React.ReactNode
  effects: boolean
  size: 'small' | 'large'
}

export default function MovieCard({
  children,
  size,
  ...props
}: Props): ReactElement {
  return (
    <Styled.Container size={size} {...props}>
      {children}
    </Styled.Container>
  )
}
