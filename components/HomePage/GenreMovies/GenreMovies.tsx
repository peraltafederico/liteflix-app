import React, { ReactElement } from 'react'
import { Movie } from '../../../interfaces'
import MovieCategory from '../../commons/MovieCategory/MovieCategory'

interface Props {
  movies: Movie[]
  title: string
}

export default function GenreMovies({ movies, title }: Props): ReactElement {
  return <MovieCategory title={title} size="wide" movies={movies} />
}
