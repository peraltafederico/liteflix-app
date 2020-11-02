import React, { ReactElement } from 'react'
import UserLogo from '../../../UserLogo/UserLogo'
import * as Styled from './UserNavigationMenu.styles'

interface Props {
  users: { name: string; loggedIn?: boolean }[]
  settings: { name: string; highlight?: boolean }[]
}

export default function UserNavigationMenu({
  users,
  settings,
}: Props): ReactElement {
  return (
    <Styled.Container>
      <Styled.Users>
        {users.map((user) => (
          <Styled.UserContainer loggedIn={user.loggedIn} key={user.name}>
            <UserLogo state={user.loggedIn ? 'active' : 'disabled'} />
            <Styled.UserName>{user.name}</Styled.UserName>
          </Styled.UserContainer>
        ))}
      </Styled.Users>
      <Styled.Settings>
        {settings.map((section) => (
          <Styled.Setting key={section.name} highlight={section.highlight}>
            {section.name}
          </Styled.Setting>
        ))}
      </Styled.Settings>
    </Styled.Container>
  )
}
