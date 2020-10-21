import React, { ReactElement } from 'react'
import { Link } from './commons/interfaces'
import * as Styled from './Header.styles'
import MainNavigation from './MainNavigation/MainNavigation'

interface Props {
  logoUrl: string
  links: Link[]
  children?: React.ReactNode
  secondaryNavigation?: React.ReactNode
}

export default function Header({
  logoUrl,
  links,
  children,
  secondaryNavigation,
}: Props): ReactElement {
  return (
    <Styled.Header>
      <Styled.Content>
        <Styled.Logo alt="logo" src={logoUrl} />
        <Styled.Navigation>
          <MainNavigation links={links}>{children}</MainNavigation>
          {secondaryNavigation}
        </Styled.Navigation>
      </Styled.Content>
    </Styled.Header>
  )
}
