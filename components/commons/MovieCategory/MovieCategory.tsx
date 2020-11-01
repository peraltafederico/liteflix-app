import React, { ReactElement } from 'react'
import MovieList from './MovieList/MovieList'
import * as Styled from './MovieCategory.styles'
import { CardSize } from '../../../interfaces'

interface Props {
  movies: { imgUrl: string; title: string; genre: string }[]
  title: string
  size: CardSize
}

export default function MovieCategory({
  movies,
  title,
  size,
  ...props
}: Props): ReactElement {
  return (
    <Styled.Container {...props}>
      <Styled.Title>{title}</Styled.Title>
      <MovieList size={size} movies={movies} />
    </Styled.Container>
  )
}
