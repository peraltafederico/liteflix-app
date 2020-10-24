import React, { ReactElement } from 'react'
import * as Styled from './Input.styles'

interface Props {
  label: string
}

export default function Input({ label, ...props }: Props): ReactElement {
  return (
    <Styled.Container>
      <Styled.Label>{label}</Styled.Label>
      <Styled.InputElement {...props} />
    </Styled.Container>
  )
}
