import React, { ReactElement } from 'react'
import Dropdown from '../../UI/Dropdown/Dropdown'
import NotificationBell from '../NotificationBell/NotificationBell'
import * as Styled from './UserNavigation.styles'
import UserNavigationMenu from './UserNavigationMenu/UserNavigationMenu'

interface Props {
  section: string
  notification?: boolean
  users: { name: string; loggedIn?: boolean }[]
  settings: { name: string; highlight?: boolean }[]
}

export default function UserNavigation({
  section,
  notification,
  users,
  settings,
}: Props): ReactElement {
  return (
    <Styled.Container>
      <Styled.Section href="/#">{section}</Styled.Section>
      <NotificationBell notification={notification} />
      <Dropdown menu={<UserNavigationMenu users={users} settings={settings} />}>
        <Styled.User>
          <Styled.UserLogo />
          <Styled.ArrowIcon src="/images/arrow.svg" />
        </Styled.User>
      </Dropdown>
    </Styled.Container>
  )
}
