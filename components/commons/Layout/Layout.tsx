import React, { ReactElement, useState } from 'react'
import { Transition } from 'react-transition-group'
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

const drawerSettings = ['Cambiar Usuario', 'Configuración', 'Ayuda']

const drawerSections = [
  {
    icon: <NotificationBell notification={true} />,
    value: 'Novedades',
  },
  { value: 'Series' },
  { value: 'Películas' },
  { value: 'Mi lista' },
  { value: 'Niños' },
]

const users = [
  {
    name: 'Ernesto Garmendia',
    loggedIn: true,
  },
  {
    name: 'User 03',
  },
  {
    name: 'User 04',
  },
]

const userMenuSettings = [
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

interface Props {
  children: ReactElement
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
    if (showDrawer) {
      setShowDrawer(false)
    }
    setShowModal(!showModal)
  }

  return (
    <>
      <Transition
        timeout={{
          enter: 0,
          exit: 200,
        }}
        in={showModal}
        mountOnEnter
        unmountOnExit
        onEntered={() => {
          document.body.style.overflow = 'hidden'
        }}
        onExit={() => {
          document.body.style.overflow = 'auto'
        }}
      >
        {(state) => (
          <AddMovieModal
            show={showModal}
            onClose={handleToggleModal}
            state={state}
          />
        )}
      </Transition>
      <Header
        links={links}
        logoUrl="/images/logo.svg"
        onClickBurger={handleToggleDrawer}
        secondaryNavigation={
          <UserNavigation
            settings={userMenuSettings}
            users={users}
            section="Niños"
            notification={notification}
          />
        }
      >
        <ExtensibleButton
          extensibleText="Agregar película"
          styles={{ margin: '0 10px' }}
          onClick={handleToggleModal}
        >
          <Styled.PlusIcon src="/images/plus.svg" />
        </ExtensibleButton>
      </Header>
      <Transition
        in={showDrawer}
        timeout={{
          enter: 0,
          exit: 500,
        }}
        unmountOnExit
        onEntered={() => {
          document.body.style.overflow = 'hidden'
        }}
        onExit={() => {
          document.body.style.overflow = 'auto'
        }}
      >
        {(state) => (
          <Drawer
            show={showDrawer}
            onClose={handleToggleDrawer}
            onClickAddMovie={handleToggleModal}
            settings={drawerSettings}
            sections={drawerSections}
            state={state}
          />
        )}
      </Transition>
      {children}
    </>
  )
}
