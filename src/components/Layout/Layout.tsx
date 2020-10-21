import React, { ReactElement } from 'react'
import Tooltip from './Tooltip/Tooltip'
import Header from './Header/Header'
import UserNavigation from './UserNavigation/UserNavigation'
import * as Styled from './Layout.styles'
import Drawer from './Drawer/Drawer'
import NotificationBell from './NotificationBell/NotificationBell'
import ExtensibleButton from './ExtensibleButton/ExtensibleButton'

const links = [
  { href: '#', url: 'Inicio', highlight: true },
  { href: '#', url: 'Series' },
  { href: '#', url: 'Películas' },
  { href: '#', url: 'Agregados recientemente' },
  { href: '#', url: 'Mi lista' },
]

const settings = ['Cambiar Usuario', 'Configuración', 'Ayuda']

const sections = [
  {
    icon: <NotificationBell notification={true} />,
    value: 'Novedades',
  },
  { value: 'Series' },
  { value: 'Películas' },
  { value: 'Mi lista' },
  { value: 'Niños' },
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
        <ExtensibleButton
          extensibleText="Agregar película"
          styles={{ margin: '0 10px' }}
        >
          <Styled.PlusIcon src="/images/plus.svg" />
        </ExtensibleButton>
      </Header>
      <Drawer settings={settings} sections={sections} />
      {children}
    </>
  )
}
