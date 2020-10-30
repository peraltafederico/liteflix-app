import React, { ReactElement } from 'react'
import useBreakpoints from '../../../hooks/useBreakpoints'
import Burger from '../Drawer/Burger/Burger'
import { Link } from './commons/interfaces'
import * as Styled from './Header.styles'
import MainNavigation from './MainNavigation/MainNavigation'

interface Props {
  logoUrl: string
  links: Link[]
  children?: React.ReactNode
  secondaryNavigation?: React.ReactNode
  onClickBurger: () => void
}

export default function Header({
  logoUrl,
  links,
  children,
  secondaryNavigation,
  onClickBurger,
}: Props): ReactElement {
  const { mobile, desktop, tablet } = useBreakpoints()

  return (
    <Styled.Header>
      <Styled.Content mobile={mobile}>
        {(mobile || tablet) && (
          <>
            <Styled.BurgerContainer mobile={mobile}>
              <Burger onClick={onClickBurger} />
            </Styled.BurgerContainer>
            <Styled.Logo alt="logo" src={logoUrl} />
          </>
        )}
        {desktop && (
          <>
            <Styled.Logo alt="logo" src={logoUrl} />
            <Styled.Navigation>
              <MainNavigation links={links}>{children}</MainNavigation>
              {secondaryNavigation}
            </Styled.Navigation>
          </>
        )}
      </Styled.Content>
    </Styled.Header>
  )
}
