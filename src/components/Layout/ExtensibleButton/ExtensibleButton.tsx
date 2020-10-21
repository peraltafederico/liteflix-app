import React, { CSSProperties, ReactElement } from 'react'
import * as Styled from './ExtensibleButton.styles'

interface Props {
  children?: React.ReactNode
  styles?: CSSProperties
  extensibleText: React.ReactNode
}

export default function ExtensibleButton({
  children,
  styles,
  extensibleText,
}: Props): ReactElement {
  return (
    <Styled.Container style={{ ...styles }}>
      {children}
      <Styled.ExtensibleText>{extensibleText}</Styled.ExtensibleText>
    </Styled.Container>
  )
}
