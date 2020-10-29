import React, { ReactElement } from 'react'
import * as Styled from './Input.styles'

interface Props {
  label: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  onBlur?: () => void
}

export default function Input({
  label,
  value,
  onChange,
  onBlur,
  ...props
}: Props): ReactElement {
  return (
    <Styled.Container>
      <Styled.Label>{label}</Styled.Label>
      <Styled.InputElement
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
    </Styled.Container>
  )
}
