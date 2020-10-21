import React, { ReactElement } from 'react'
import * as Styled from './Burger.styles'

export default function Burger(): ReactElement {
  return (
    <Styled.Container>
      <Styled.Line />
      <Styled.Line />
      <Styled.Line />
    </Styled.Container>
  )
}
