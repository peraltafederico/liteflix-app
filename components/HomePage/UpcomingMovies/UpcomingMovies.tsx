import React, { ReactElement } from 'react'
import { Movie } from '../../../interfaces'
import * as Styled from './UpcomingMovies.styles'

interface Props {
  movies: Movie[]
}

export default function UpcomingMovies({ movies }: Props): ReactElement {
  return (
    <Styled.MovieCategory title="Próximamente" size="wide" movies={movies} />
  )
}
