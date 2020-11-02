import React, { ReactElement } from 'react'
import { Movie } from '../../../interfaces'
import MovieCategory from '../../commons/MovieCategory/MovieCategory'

interface Props {
  movies: Movie[]
}

export default function PopularMovies({ movies }: Props): ReactElement {
  return (
    <MovieCategory title="POPULARES DE LITEFLIX" size="large" movies={movies} />
  )
}
