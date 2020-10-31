import { isFunction } from 'lodash'
import React, { ReactElement } from 'react'
import * as Styled from './Select.styles'

interface Props {
  options: { text: string; value: number | string }[]
  onChange: (value: number | string) => void
  setShow?: (show: boolean) => void
}

export default function Select({
  options,
  onChange,
  setShow,
}: Props): ReactElement {
  const handleClick = (option: any) => {
    onChange(option.value)

    if (isFunction(setShow)) {
      setShow(false)
    }
  }

  return (
    <Styled.Container>
      <Styled.Options>
        {options.map((option) => (
          <Styled.Option
            data-value={option.value}
            onClick={() => handleClick(option.value)}
            key={option.text}
          >
            {option.text}
          </Styled.Option>
        ))}
      </Styled.Options>
    </Styled.Container>
  )
}
