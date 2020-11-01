import React, { ReactElement } from 'react'
import * as Styled from './MovieList.styles'

interface Props {
  movies: { imgUrl: string; genre: string; title: string }[]
  size: 'small' | 'large'
}

export default function MovieList({ movies, size }: Props): ReactElement {
  return (
    <Styled.MoviesContainer>
      {movies.map((movie) => (
        <Styled.MovieCard
          size={size}
          key={movie.imgUrl}
          genre={movie.genre}
          title={movie.title}
        >
          <img src={movie.imgUrl} alt="movie" />
        </Styled.MovieCard>
      ))}
    </Styled.MoviesContainer>
  )
}
