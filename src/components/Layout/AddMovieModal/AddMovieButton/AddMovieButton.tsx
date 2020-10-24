import React, { ReactElement } from 'react'

import * as Styled from './AddMovieButton.styles'

interface Props {
  disabled: boolean
}

export default function AddMovieButton({ disabled }: Props): ReactElement {
  return (
    <Styled.Button disabled={disabled} onClick={() => console.log('a')}>
      Subir Película
    </Styled.Button>
  )
}
