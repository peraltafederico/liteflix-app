import React, { ReactElement } from 'react'
import MovieSpinner from '../MovieSpinner/MovieSpinner'
import * as Styled from './BaseButton.styles'

interface Props {
  onClick: () => void
  children: React.ReactNode
  loading?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean
}

export default function BaseButton({
  onClick,
  children,
  disabled,
  type = 'submit',
  loading,
  ...props
}: Props): ReactElement {
  return (
    <Styled.Container
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      {loading ? <MovieSpinner /> : children}
    </Styled.Container>
  )
}
