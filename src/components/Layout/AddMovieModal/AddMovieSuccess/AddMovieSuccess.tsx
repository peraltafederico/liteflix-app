import React, { ReactElement } from 'react'
import * as Styled from './AddMovieSuccess.styles'

interface Props {
  movie: string
  category: string
  onClose: () => void
}

export default function AddMovieSuccess({
  movie,
  category,
  onClose,
}: Props): ReactElement {
  return (
    <>
      <Styled.Logo src="/images/logo.svg" />
      <Styled.Feedback>
        <Styled.Title>Felicitaciones!</Styled.Title>
        <Styled.Text>
          <>
            <b>{movie}</b> fue correctamente subido a la categoría{' '}
            <b>{category}</b>
          </>
        </Styled.Text>
      </Styled.Feedback>
      <Styled.Button onClick={onClose} text="Cerrar" />
    </>
  )
}
