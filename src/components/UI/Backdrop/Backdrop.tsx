import React, { ReactElement } from 'react'
import * as Styled from './Backdrop.styles'

interface Props {
  onClick: () => void
}

export default function Backdrop({ onClick }: Props): ReactElement {
  return <Styled.Container onClick={onClick} />
}
