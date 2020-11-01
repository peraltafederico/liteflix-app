import React, { ReactElement } from 'react'
import * as Styled from './NotificationBell.styles'

interface Props {
  children?: ReactElement
  notification?: boolean
}

export default function NotificationBell({
  children,
  notification,
}: Props): ReactElement {
  return (
    <Styled.Container notification={notification}>
      <Styled.NotificationIcon src="/images/bell.svg" alt="bell" />
      {children}
    </Styled.Container>
  )
}
