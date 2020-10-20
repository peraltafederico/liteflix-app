import React, { ReactElement } from 'react'
import Header from '../Header/Header'
import Tooltip from './Tooltip/Tooltip'
import UserNavigation from './UserNavigation/UserNavigation'
import * as Styled from './Layout.styles'

const links = [
  { href: '#', url: 'Inicio', highlight: true },
  { href: '#', url: 'Series' },
  { href: '#', url: 'Películas' },
  { href: '#', url: 'Agregados recientemente' },
  { href: '#', url: 'Mi lista' },
]

interface Props {
  children: React.ReactNode
  notification?: boolean
}

export default function Layout({
  children,
  notification,
}: Props): ReactElement {
  return (
    <>
      <Header
        links={links}
        logoUrl="/images/logo.svg"
        secondaryNavigation={
          <UserNavigation
            section="Niños"
            userPhotoSrc="/images/user.svg"
            notification={notification}
          />
        }
      >
        <Tooltip>
          <Styled.PlusIcon src="/images/plus.svg" />
          <Styled.TooltipText>Agregar película</Styled.TooltipText>
        </Tooltip>
      </Header>
      {children}
    </>
  )
}
