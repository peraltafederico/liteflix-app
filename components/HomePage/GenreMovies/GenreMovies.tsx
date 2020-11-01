import React, { ReactElement } from 'react'
import MovieList from '../../commons/MovieList/MovieList'
import * as Styled from './GenreMovies.styles'

interface Props {
  movies: { imgUrl: string; genre: string; title: string }[]
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
