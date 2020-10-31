import React, { ReactElement, ReactText } from 'react'
import { get, isFunction } from 'lodash'
import Dropdown from '../Dropdown/Dropdown'
import Input from '../Input/Input'
import * as Styled from './Select.styles'

interface OptionProps {
  text: string
  value: ReactText
  onChange?: (value: ReactText) => void
}

export function Option({ text, value, onChange }: OptionProps): ReactElement {
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

interface MenuProps {
  children: ReactElement | ReactElement[]
  setShow?: (show: boolean) => void
}

function Menu({ children, setShow }: MenuProps) {
  const options = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      onChange: (value: ReactText) => {
        child.props.onChange(value)

        if (isFunction(setShow)) {
          setShow(false)
        }
      },
    })
  )

  return (
    <Styled.Container>
      <Styled.Options>{options}</Styled.Options>
    </Styled.Container>
  )
}

interface SelectProps {
  onChange: (value: number | string) => void
  children: ReactElement | ReactElement[]
  value: ReactText
}

export function Select({
  children,
  onChange,
  value,
}: SelectProps): ReactElement {
  const options = React.Children.map(children, (child) =>
    React.cloneElement(child, { onChange })
  )

  const selectedElement = React.Children.toArray(children).find(
    (child) => get(child, 'props.value') === value
  )

  const text = get(selectedElement, 'props.text')

  return (
    <Dropdown menu={<Menu>{options}</Menu>} trigger="click">
      <Input
        label="Categoría"
        inputProps={{
          autoComplete: 'off',
          value: text,
          readOnly: true,
          style: {
            caretColor: 'transparent',
            cursor: 'pointer',
          },
        }}
      />
    </Dropdown>
  )
}
