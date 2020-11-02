import React, { ReactElement, ReactText } from 'react'
import { get } from 'lodash'
import Dropdown from '../Dropdown/Dropdown'
import Input from '../Input/Input'
import Menu from './Menu/Menu'

interface SelectProps {
  onChange: (value: number | string) => void
  children: ReactElement | ReactElement[]
  value: ReactText
}

export default function Select({
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
