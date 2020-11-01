import React, { ReactElement } from 'react'
import MovieCategory from '../../commons/MovieCategory/MovieCategory'

export default function GenreMovies({ movies, title }: any): ReactElement {
  return <MovieCategory title={title} size="small" movies={movies} />
}
