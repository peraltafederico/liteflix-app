import React, { ReactElement } from 'react'

import * as Styled from './AddMovieButton.styles'

interface Props {
  text: string
  onClick: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
}

export default function AddMovieButton({
  disabled,
  onClick,
  text,
  type,
  ...props
}: Props): ReactElement {
  return (
    <Styled.Button disabled={disabled} onClick={onClick} type={type} {...props}>
      {text}
    </Styled.Button>
  )
}
