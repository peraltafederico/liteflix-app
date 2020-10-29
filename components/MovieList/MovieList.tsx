import React, { ReactElement } from 'react'
import * as Styled from './MovieList.styles'

interface Props {
  movies: { imgUrl: string }[]
  size: 'small' | 'large'
}

export default function MovieList({ movies, size }: Props): ReactElement {
  return (
    <Styled.MoviesContainer>
      {movies.map((movie) => (
        <Styled.MovieCard size={size} effects={false} key={movie.imgUrl}>
          <img src={movie.imgUrl} alt="movie" />
        </Styled.MovieCard>
      ))}
    </Styled.MoviesContainer>
  )
}
