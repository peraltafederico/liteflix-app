import React, { ReactElement, useContext } from 'react'
import { queryCache, useMutation, useQuery } from 'react-query'
import { toNumber } from 'lodash'
import * as Styled from './AddMovieModal.styles'
import AddMovieForm from './AddMovieForm/AddMovieForm'
import api from '../../../../services'
import AddMovieSuccess from './AddMovieSuccess/AddMovieSuccess'
import { AppContext } from '../../../../context/app'

interface Props {
  onClose: () => void
  show: boolean
  state: string
}

// TODO: Add types

export default function AddMovieModal({
  onClose,
  show,
  state,
}: Props): ReactElement {
  const { genres, setGenres } = useContext(AppContext)

  const [mutate, { isSuccess, data: movieResponse, isLoading }] = useMutation(
    (movie: any) => api.movies.create(movie),
    {
      onSuccess: () => {
        queryCache.refetchQueries('genreMovies')
      },
    }
  )

  const { isFetching: isFetchingGenres } = useQuery(
    'genres',
    api.movies.getGenres,
    {
      enabled: !genres.length,
      onSuccess: (res) => setGenres(res.data),
    }
  )

  const handlePublishMovie = async (values: any) => {
    await mutate({
      ...values,
      tmdbGenreId: toNumber(values.tmdbGenreId),
    })
  }

  const movie = movieResponse?.data || {}

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
          isFetchingGenres={isFetchingGenres}
          genres={genres}
        />
      )}
    </Styled.Modal>
  )
}
