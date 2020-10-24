import React, { ReactElement, useState } from 'react'
import * as Styled from './AddMovieModal.styles'
import AddMovieForm from './AddMovieForm/AddMovieForm'
import AddMovieSuccess from './AddMovieSuccess/AddMovieSuccess'

interface Props {
  onClose: () => void
  show: boolean
}

// TODO: Remove show prop
// TODO: Add types

export default function AddMovieModal({ onClose, show }: Props): ReactElement {
  const [success, setSuccess] = useState(false)

  const handlePublishMovie = (values: any) => {
    setSuccess(true)
  }

  return (
    <Styled.Modal onClose={onClose} show={show} success={success}>
      {success ? (
        <AddMovieSuccess
          movie="Liteflix The Movie"
          category="Aventuras"
          onClose={onClose}
        />
      ) : (
        <AddMovieForm onSubmit={handlePublishMovie} />
      )}
    </Styled.Modal>
  )
}
