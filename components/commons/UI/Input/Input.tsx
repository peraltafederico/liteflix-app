import React, { ReactElement } from 'react'
import * as Styled from './Input.styles'

interface Props {
  label: string
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export default function Input({ label, inputProps }: Props): ReactElement {
  return (
    <Styled.Container>
      <Styled.Label>{label}</Styled.Label>
      <Styled.InputElement {...inputProps} />
    </Styled.Container>
  )
}
