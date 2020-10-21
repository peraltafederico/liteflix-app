import React, { ReactElement } from 'react'
import NotificationBell from '../NotificationBell/NotificationBell'
import * as Styled from './UserNavigation.styles'

interface Props {
  section: string
  userPhotoSrc: string
  notification?: boolean
}

export default function UserNavigation({
  section,
  userPhotoSrc,
  notification,
}: Props): ReactElement {
  return (
    <Styled.Container>
      <Styled.Section href="">{section}</Styled.Section>
      <NotificationBell notification={notification} />
      <Styled.User>
        <Styled.UserIcon src={userPhotoSrc} alt="user" />
        <Styled.ArrowIcon src="/images/arrow.svg" />
      </Styled.User>
    </Styled.Container>
  )
}
