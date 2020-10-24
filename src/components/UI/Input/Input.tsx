import React, { ReactElement } from 'react'
import { useField, FieldInputProps } from 'formik'
import * as Styled from './Input.styles'

interface Props {
  label: string
  name: string
}

export default function Input({ label, ...props }: Props): ReactElement {
  const [field] = useField(props as FieldInputProps<any>)

  return (
    <Styled.Container>
      <Styled.Label>{label}</Styled.Label>
      <Styled.InputElement {...field} {...props} />
    </Styled.Container>
  )
}
