import React, { ReactElement, useState } from 'react'
import { isEmpty } from 'lodash'
import * as Styled from './AddMovieModal.styles'
import AddMovieForm from './AddMovieForm/AddMovieForm'
import AddMovieSuccess from './AddMovieSuccess/AddMovieSuccess'

interface Movie {
  name: string
  category: string
}
interface Props {
  onClose: () => void
  show: boolean
}

// TODO: Remove show prop
// TODO: Add types

export default function AddMovieModal({ onClose, show }: Props): ReactElement {
  const [movie, setMovie] = useState({} as Movie)

  const handlePublishMovie = (values: Movie) => setMovie(values)

  const success = !isEmpty(movie)

  return (
    <Styled.Modal onClose={onClose} show={show} success={success}>
      {success ? (
        <AddMovieSuccess
          movie={movie.name}
          category={movie.category}
          onClose={onClose}
        />
      ) : (
        <AddMovieForm onSubmit={handlePublishMovie} />
      )}
    </Styled.Modal>
  )
}
