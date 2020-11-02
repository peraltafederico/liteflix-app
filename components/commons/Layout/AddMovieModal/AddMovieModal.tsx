import React, { ReactElement, useContext, useState } from 'react'
import { queryCache, useMutation, useQuery } from 'react-query'
import { toNumber } from 'lodash'
import * as Styled from './AddMovieModal.styles'
import AddMovieForm from './AddMovieForm/AddMovieForm'
import api from '../../../../services'
import AddMovieSuccess from './AddMovieSuccess/AddMovieSuccess'
import { AppContext } from '../../../../context/app'
import { RawMovie, RawMovieForm } from '../../../../interfaces'

interface Props {
  onClose: () => void
  show: boolean
  state: string
}

export default function AddMovieModal({
  onClose,
  show,
  state,
}: Props): ReactElement {
  const { genres, setGenres } = useContext(AppContext)
  const [creationError, setCreationError] = useState(false)

  const [
    mutate,
    { isSuccess, data: movieCreationResponse, isLoading },
  ] = useMutation((movie: RawMovie) => api.movies.create(movie), {
    onSuccess: () => {
      setCreationError(false)
      queryCache.refetchQueries('genreMovies')
    },
    onError: () => setCreationError(true),
  })

  const { isFetching: isFetchingGenres } = useQuery(
    'genres',
    api.movies.getGenres,
    {
      enabled: !genres.length,
      onSuccess: (res) => setGenres(res.data),
    }
  )

  const handlePublishMovie = async (values: RawMovieForm) => {
    await mutate({
      ...values,
      tmdbGenreId: toNumber(values.tmdbGenreId),
    })
  }

  const movie = movieCreationResponse?.data

  const category = genres?.find((genre) => genre.id === movie?.tmdbGenreId)

  return (
    <Styled.Modal
      onClose={onClose}
      show={show}
      success={isSuccess}
      state={state}
    >
      {isSuccess ? (
        <AddMovieSuccess
          movie={movie?.title || ''}
          category={category?.name || ''}
          onClose={onClose}
        />
      ) : (
        <AddMovieForm
          onSubmit={handlePublishMovie}
          loading={isLoading}
          isFetchingGenres={isFetchingGenres}
          genres={genres}
          creationError={creationError}
        />
      )}
    </Styled.Modal>
  )
}
