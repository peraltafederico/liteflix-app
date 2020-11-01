import React, { ReactElement } from 'react'
import MovieCategory from '../../commons/MovieCategory/MovieCategory'

export default function PopularMovies({ movies }: any): ReactElement {
  return (
    <MovieCategory title="POPULARES DE LITEFLIX" size="large" movies={movies} />
  )
}
