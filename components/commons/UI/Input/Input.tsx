import React, { ReactElement } from 'react'
import * as Styled from './Input.styles'

interface Props {
  label: string
  inputProps: React.InputHTMLAttributes<HTMLInputElement>
}

export default function Input({ label, inputProps }: Props): ReactElement {
  return (
    <Styled.Container>
      <Styled.Label htmlFor={inputProps.name}>{label}</Styled.Label>
      <Styled.InputElement id={inputProps.name} {...inputProps} />
    </Styled.Container>
  )
}
