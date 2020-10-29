import React, { ReactElement } from 'react'
import MovieList from '../../MovieList/MovieList'
import * as Styled from './PopularMovies.styles'

interface Props {
  movies: { imgUrl: string }[]
}

export default function UpcomingMovies({ movies }: Props): ReactElement {
  return (
    <Styled.Container>
      <Styled.Title>POPULARES DE LITEFLIX</Styled.Title>
      <MovieList size="large" movies={movies} />
    </Styled.Container>
  )
}
