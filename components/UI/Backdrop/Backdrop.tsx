import React, { ReactElement } from 'react'
import * as Styled from './Backdrop.styles'

interface Props {
  onClick: () => void
  transparent?: boolean
}

export default function Backdrop({
  onClick,
  transparent,
  ...props
}: Props): ReactElement {
  return (
    <Styled.Container transparent={transparent} onClick={onClick} {...props} />
  )
}
