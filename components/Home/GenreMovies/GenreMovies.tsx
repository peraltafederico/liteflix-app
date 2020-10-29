import React, { ReactElement } from 'react'
import MovieList from '../../MovieList/MovieList'
import * as Styled from './GenreMovies.styles'

interface Props {
  movies: { imgUrl: string }[]
  title: string
}

export default function GenreMovies({ movies, title }: Props): ReactElement {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <MovieList size="small" movies={movies} />
    </Styled.Container>
  )
}
