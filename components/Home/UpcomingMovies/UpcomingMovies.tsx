import React, { ReactElement } from 'react'
import * as Styled from './UpcomingMovies.styles'

interface Props {
  movies: { imgUrl: string }[]
}

export default function PopularMovies({ movies }: Props): ReactElement {
  return (
    <Styled.Container>
      <Styled.Title>Proximamente</Styled.Title>
      <Styled.MoviesContainer>
        {movies.slice(0, 4).map((movie, key) => (
          <Styled.MovieCard
            size="small"
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
