import React, { ReactElement } from 'react'
import Dropdown from '../../UI/Dropdown/Dropdown'
import NotificationBell from '../NotificationBell/NotificationBell'
import * as Styled from './UserNavigation.styles'
import UserNavigationMenu from './UserNavigationMenu/UserNavigationMenu'

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
  const users = [
    {
      name: 'Ernesto Garmendia',
      imgUrl: userPhotoSrc,
      loggedIn: true,
    },
    {
      name: 'User 03',
      imgUrl: userPhotoSrc,
    },
    {
      name: 'User 04',
      imgUrl: userPhotoSrc,
    },
  ]

  const sections = [
    {
      name: 'Configuración',
    },
    {
      name: 'Ayuda',
    },
    {
      name: 'Log Out',
      highlight: true,
    },
  ]

  return (
    <Styled.Container>
      <Styled.Section href="/#">{section}</Styled.Section>
      <NotificationBell notification={notification} />
      <Dropdown menu={<UserNavigationMenu users={users} sections={sections} />}>
        <Styled.User>
          <Styled.UserIcon src={userPhotoSrc} alt="user" />
          <Styled.ArrowIcon src="/images/arrow.svg" />
        </Styled.User>
      </Dropdown>
    </Styled.Container>
  )
}
