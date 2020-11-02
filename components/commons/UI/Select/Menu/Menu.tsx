import React, { ReactElement, ReactText } from 'react'
import { isFunction } from 'lodash'
import * as Styled from './Menu.styles'

interface MenuProps {
  children: ReactElement | ReactElement[]
  setShow?: (show: boolean) => void
}

export default function Menu({ children, setShow }: MenuProps): ReactElement {
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
