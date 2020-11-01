import React, { ReactElement } from 'react'
import GridMovieList from '../../commons/GridMovieList/GridMovieList'
import * as Styled from './GenreMovies.styles'

interface Props {
  movies: { imgUrl: string; genre: string; title: string }[]
  title: string
}

export default function GenreMovies({ movies, title }: Props): ReactElement {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <GridMovieList size="small" movies={movies} />
    </Styled.Container>
  )
}
