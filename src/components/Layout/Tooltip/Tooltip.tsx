import React, { CSSProperties, ReactElement } from 'react'
import * as Styled from './Tooltip.styles'

interface Props {
  children?: React.ReactNode
  styles?: CSSProperties
}

export default function Tooltip({ children, styles }: Props): ReactElement {
  return <Styled.Container style={{ ...styles }}>{children}</Styled.Container>
}
