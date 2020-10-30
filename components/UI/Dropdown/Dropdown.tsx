import React, { ReactElement, useState } from 'react'
import * as Styled from './Dropdown.styles'

interface Props {
  trigger?: 'click' | 'hover'
  children: React.ReactNode
  menu: React.ReactNode
}

export default function Dropdown({
  trigger = 'hover',
  children,
  menu,
}: Props): ReactElement {
  const [show, setShow] = useState(false)

  const getMouseEvents = () => {
    switch (trigger) {
      case 'click':
        return {
          onClick: () => setShow(!show),
        }
      default:
        return {
          onMouseEnter: () => setShow(true),
          onMouseLeave: () => setShow(false),
        }
    }
  }

  return (
    <Styled.Container {...getMouseEvents()}>
      {children}
      {show && menu}
    </Styled.Container>
  )
}
