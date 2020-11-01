import React, { ReactElement } from 'react'
import * as Styled from './AddMovieButton.styles'

interface Props {
  text: string
  onClick: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  loading?: boolean
}

export default function AddMovieButton({
  disabled,
  onClick,
  text,
  type,
  loading,
  ...props
}: Props): ReactElement {
  return (
    <Styled.Button
      disabled={disabled}
      onClick={onClick}
      type={type}
      loading={loading}
      {...props}
    >
      {text}
    </Styled.Button>
  )
}
