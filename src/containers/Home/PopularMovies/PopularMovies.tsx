import React, { ReactElement } from 'react'
import * as Styled from './PopularMovies.styles'

interface Props {
  movies: { imageUrl: string }[]
}

export default function UpcomingMovies({ movies }: Props): ReactElement {
  return (
    <Styled.Container>
      <Styled.Title>POPULARES DE LITEFLIX</Styled.Title>
      <Styled.MoviesContainer>
        {movies.slice(0, 4).map((movie) => (
          <Styled.MovieCard size="large" effects={false} key={movie.imageUrl}>
            <img src={movie.imageUrl} alt="movie" />
          </Styled.MovieCard>
        ))}
      </Styled.MoviesContainer>
    </Styled.Container>
  )
}
