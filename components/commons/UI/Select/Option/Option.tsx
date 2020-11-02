import React, { ReactElement, ReactText } from 'react'
import { isFunction } from 'lodash'
import * as Styled from './Option.styles'

interface OptionProps {
  text: string
  value: ReactText
  onChange?: (value: ReactText) => void
}

export default function Option({
  text,
  value,
  onChange,
}: OptionProps): ReactElement {
  const handleClick = () => {
    if (isFunction(onChange)) {
      onChange(value)
    }
  }

  return (
    <Styled.Option data-value={value} onClick={handleClick} key={text}>
      {text}
    </Styled.Option>
  )
}
