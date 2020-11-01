import React, { ReactElement } from 'react'
import * as Styled from './UserNavigationMenu.styles'

interface Props {
  users: { name: string; imgUrl: string; loggedIn?: boolean }[]
  sections: { name: string; highlight?: boolean }[]
}

export default function UserNavigationMenu({
  users,
  sections,
}: Props): ReactElement {
  return (
    <Styled.Container>
      <Styled.Users>
        {users.map((user) => (
          <Styled.UserContainer loggedIn={user.loggedIn} key={user.name}>
            <Styled.UserIcon src={user.imgUrl} alt="user" />
            <Styled.UserName>{user.name}</Styled.UserName>
          </Styled.UserContainer>
        ))}
      </Styled.Users>
      <Styled.Sections>
        {sections.map((section) => (
          <Styled.Section key={section.name} highlight={section.highlight}>
            {section.name}
          </Styled.Section>
        ))}
      </Styled.Sections>
    </Styled.Container>
  )
}
