import React, { ReactElement } from 'react'
import * as Styled from './UpcomingMovies.styles'

export default function UpcomingMovies({ movies }: any): ReactElement {
  return (
    <Styled.MovieCategory title="Próximamente" size="small" movies={movies} />
  )
}
