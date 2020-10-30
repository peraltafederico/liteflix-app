import React, { ReactElement } from 'react'
import MovieList from '../../FixedMovieList/FixedMovieList'
import * as Styled from './UpcomingMovies.styles'

interface Props {
  movies: { imgUrl: string }[]
}

export default function UpcomingMovies({ movies }: Props): ReactElement {
  return (
    <Styled.Container>
      <Styled.Title>Proximamente</Styled.Title>
      <MovieList size="small" movies={movies} />
    </Styled.Container>
  )
}
