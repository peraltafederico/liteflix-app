import React, { ReactElement } from 'react'
import * as Styled from './PopularMovies.styles'

interface Props {
  movies: { imgUrl: string }[]
}

export default function UpcomingMovies({ movies }: Props): ReactElement {
  return (
    <Styled.Container>
      <Styled.Title>POPULARES DE LITEFLIX</Styled.Title>
      <Styled.MoviesContainer>
        {movies.slice(0, 4).map((movie, key) => (
          <Styled.MovieCard
            size="large"
            effects={false}
            key={`${movie.imgUrl}${key}`}
          >
            <img src={movie.imgUrl} alt="movie" />
          </Styled.MovieCard>
        ))}
      </Styled.MoviesContainer>
    </Styled.Container>
  )
}
