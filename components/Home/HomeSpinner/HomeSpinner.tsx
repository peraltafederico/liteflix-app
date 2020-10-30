import React, { ReactElement } from 'react'
import MovieSpinner from '../../UI/MovieSpinner/MovieSpinner'
import * as Styled from './HomeSpinner.styles'

export default function HomeSpinner(): ReactElement {
  return (
    <Styled.Container>
      <MovieSpinner fill="white" />
    </Styled.Container>
  )
}
