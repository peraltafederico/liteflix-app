import React, { ReactElement } from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import ExtensibleButton from '../ExtensibleButton/ExtensibleButton'
import Burger from './Burger/Burger'
import * as Styled from './Drawer.styles'

interface Props {
  settings: string[]
  sections: {
    icon?: JSX.Element
    value: string
  }[]
  onClose: () => void
  onClickAddMovie: () => void
  show: boolean
}

export default function Drawer({
  settings,
  sections,
  onClose,
  show,
  onClickAddMovie,
}: Props): ReactElement {
  return (
    <>
      {show && <Backdrop onClick={onClose} />}
      <Styled.Container show={show}>
        <Styled.Header>
          <Burger onClick={onClose} />
          <Styled.Logo src="/images/logo.svg" />
        </Styled.Header>
        <Styled.User>
          <Styled.UserIcon src="/images/user.svg" />
          <Styled.UserName>Enersto Garmendia</Styled.UserName>
        </Styled.User>
        <Styled.SettingsContainer>
          {settings.map((setting) => (
            <Styled.Setting key={setting}>{setting}</Styled.Setting>
          ))}
        </Styled.SettingsContainer>
        <Styled.SectionsContainer>
          {sections.map((section) => (
            <Styled.SectionContainer key={section.value}>
              {section.icon && (
                <Styled.IconContainer>{section.icon}</Styled.IconContainer>
              )}
              <Styled.Section>{section.value}</Styled.Section>
            </Styled.SectionContainer>
          ))}
        </Styled.SectionsContainer>

        <ExtensibleButton
          extensibleText="Agregar película"
          styles={{ marginBottom: 25 }}
          onClick={onClickAddMovie}
        >
          <Styled.PlusIcon src="/images/plus.svg" />
        </ExtensibleButton>

        <Styled.Logout>Log Out</Styled.Logout>
      </Styled.Container>
    </>
  )
}
