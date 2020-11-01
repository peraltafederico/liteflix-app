import React, { ReactElement } from 'react'
import MovieList from './MovieList/MovieList'
import * as Styled from './MovieCategory.styles'

interface Props {
  movies: { imgUrl: string; title: string; genre: string }[]
  title: string
  size: 'small' | 'large'
}

export default function MovieCategory({
  movies,
  title,
  size,
}: Props): ReactElement {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <MovieList size={size} movies={movies} />
    </Styled.Container>
  )
}
