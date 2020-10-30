import React, { ReactElement } from 'react'
import * as Styled from './FixedMovieList.styles'

interface Props {
  movies: { imgUrl: string }[]
  size: 'small' | 'large'
}

export default function FixedMovieList({ movies, size }: Props): ReactElement {
  return (
    <Styled.MoviesContainer>
      {movies.map((movie) => (
        <Styled.MovieCard size={size} key={movie.imgUrl} effects={false}>
          <img src={movie.imgUrl} alt="movie" />
        </Styled.MovieCard>
      ))}
    </Styled.MoviesContainer>
  )
}
