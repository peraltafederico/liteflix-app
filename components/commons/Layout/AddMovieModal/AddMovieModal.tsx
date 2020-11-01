import React, { ReactElement } from 'react'
import { queryCache, useMutation, useQuery } from 'react-query'
import { toNumber } from 'lodash'
import * as Styled from './AddMovieModal.styles'
import AddMovieForm from './AddMovieForm/AddMovieForm'
import api from '../../../../services'
import AddMovieSuccess from './AddMovieSuccess/AddMovieSuccess'

interface Props {
  onClose: () => void
  show: boolean
  state: string
}

// TODO: Remove show prop
// TODO: Add types

export default function AddMovieModal({
  onClose,
  show,
  state,
}: Props): ReactElement {
  const [mutate, { isSuccess, data: movieResponse, isLoading }] = useMutation(
    (movie: any) => api.movies.create(movie),
    {
      onSuccess: () => {
        queryCache.refetchQueries('genreMovies')
      },
    }
  )

  const { data: genreResponse, isFetching: fetchingGenres } = useQuery(
    'genres',
    api.movies.getGenres
  )

  const handlePublishMovie = async (values: any) => {
    await mutate({
      ...values,
      tmdbGenreId: toNumber(values.tmdbGenreId),
    })
  }

  const movie = movieResponse?.data || {}

  const genres = genreResponse?.data || []

  const category =
    genres?.find((genre: any) => genre.id === movie?.tmdbGenreId) || {}

  return (
    <Styled.Modal
      onClose={onClose}
      show={show}
      success={isSuccess}
      state={state}
    >
      {isSuccess ? (
        <AddMovieSuccess
          movie={movie.title}
          category={category.name}
          onClose={onClose}
        />
      ) : (
        <AddMovieForm
          onSubmit={handlePublishMovie}
          loading={isLoading}
          fetchingGenres={fetchingGenres}
          genres={genres}
        />
      )}
    </Styled.Modal>
  )
}
