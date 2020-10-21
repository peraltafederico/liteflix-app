import React, { ReactElement } from 'react'
import ExtensibleButton from '../ExtensibleButton/ExtensibleButton'
import Burger from './Burger/Burger'
import * as Styled from './Drawer.styles'

interface Props {
  settings: string[]
  sections: {
    icon?: JSX.Element
    value: string
  }[]
}

export default function Drawer({ settings, sections }: Props): ReactElement {
  return (
    <Styled.Container>
      <Styled.Header>
        <Burger />
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
      >
        <Styled.PlusIcon src="/images/plus.svg" />
      </ExtensibleButton>

      <Styled.Logout>Log Out</Styled.Logout>
    </Styled.Container>
  )
}
