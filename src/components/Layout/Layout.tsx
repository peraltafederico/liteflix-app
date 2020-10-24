import React, { ReactElement, useState } from 'react'
import Tooltip from './Tooltip/Tooltip'
import Header from './Header/Header'
import UserNavigation from './UserNavigation/UserNavigation'
import * as Styled from './Layout.styles'
import Drawer from './Drawer/Drawer'
import NotificationBell from './NotificationBell/NotificationBell'
import ExtensibleButton from './ExtensibleButton/ExtensibleButton'
import AddMovieModal from './AddMovieModal/AddMovieModal'

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
  const [showDrawer, setShowDrawer] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleToggleDrawer = () => setShowDrawer(!showDrawer)

  const handleToggleModal = () => {
    setShowDrawer(false)
    setShowModal(!showModal)
  }

  return (
    <>
      {showModal && (
        <AddMovieModal show={showModal} onClose={handleToggleModal} />
      )}
      <Header
        links={links}
        logoUrl="/images/logo.svg"
        onClickBurger={handleToggleDrawer}
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
          onClick={handleToggleModal}
        >
          <Styled.PlusIcon src="/images/plus.svg" />
        </ExtensibleButton>
      </Header>
      <Drawer
        show={showDrawer}
        onClose={handleToggleDrawer}
        onClickAddMovie={handleToggleModal}
        settings={settings}
        sections={sections}
      />
      {children}
    </>
  )
}
