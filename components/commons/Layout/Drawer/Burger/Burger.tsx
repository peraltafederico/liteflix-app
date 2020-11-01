import React, { ReactElement } from 'react'
import * as Styled from './Burger.styles'

interface Props {
  onClick: () => void
}

export default function Burger({ onClick }: Props): ReactElement {
  return (
    <Styled.Container onClick={onClick}>
      <Styled.Line />
      <Styled.Line />
      <Styled.Line />
    </Styled.Container>
  )
}
