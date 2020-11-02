import React, { ReactElement } from 'react'
import useDevices from '../../../../hooks/useDevices'
import Burger from '../Drawer/Burger/Burger'
import { Link } from './commons/interfaces'
import * as Styled from './Header.styles'
import MainNavigation from './MainNavigation/MainNavigation'

interface Props {
  logoUrl: string
  links: Link[]
  children?: ReactElement
  secondaryNavigation?: ReactElement
  onClickBurger: () => void
}

export default function Header({
  logoUrl,
  links,
  children,
  secondaryNavigation,
  onClickBurger,
}: Props): ReactElement {
  const { isMobile, isDesktop, isTablet } = useDevices()

  return (
    <Styled.Header>
      <Styled.Content mobile={isMobile}>
        {(isMobile || isTablet) && (
          <>
            <Styled.BurgerContainer mobile={isMobile}>
              <Burger onClick={onClickBurger} />
            </Styled.BurgerContainer>
            <Styled.Logo alt="logo" src={logoUrl} />
          </>
        )}
        {isDesktop && (
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
