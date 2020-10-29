import React, { ReactElement } from 'react'
import { useMutation } from 'react-query'
import { toNumber } from 'lodash'
import * as Styled from './AddMovieModal.styles'
import AddMovieForm from './AddMovieForm/AddMovieForm'
import api from '../../../services'
import AddMovieSuccess from './AddMovieSuccess/AddMovieSuccess'

interface Props {
  onClose: () => void
  show: boolean
}

// TODO: Remove show prop
// TODO: Add types

export default function AddMovieModal({ onClose, show }: Props): ReactElement {
  const [
    mutate,
    { isSuccess, data: res, isLoading },
  ] = useMutation((movie: any) => api.movies.create(movie))

  const handlePublishMovie = async (values) => {
    await mutate({
      ...values,
      tmdbGenreId: toNumber(values.tmdbGenreId),
    })
  }

  return (
    <Styled.Modal onClose={onClose} show={show} success={isSuccess}>
      {isSuccess ? (
        <AddMovieSuccess
          // @ts-ignore
          movie={res.data.title}
          // @ts-ignore
          category={res.data.tmdbGenreId}
          onClose={onClose}
        />
      ) : (
        <AddMovieForm onSubmit={handlePublishMovie} loading={isLoading} />
      )}
    </Styled.Modal>
  )
}
