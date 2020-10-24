import React, { ReactElement } from 'react'

import * as Styled from './AddMovieButton.styles'

interface Props {
  disabled?: boolean
  onClick: () => void
  text: string
}

export default function AddMovieButton({
  disabled,
  onClick,
  text,
  ...props
}: Props): ReactElement {
  return (
    <Styled.Button disabled={disabled} onClick={onClick} {...props}>
      {text}
    </Styled.Button>
  )
}
