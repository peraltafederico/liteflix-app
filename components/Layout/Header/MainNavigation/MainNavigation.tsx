import React, { ReactElement } from 'react'
import { Link } from '../commons/interfaces'
import * as Styled from './MainNavigation.styles'

interface Props {
  links: Link[]
  children?: React.ReactNode
}

export default function MainNavigation({
  links,
  children,
}: Props): ReactElement {
  return (
    <Styled.Container>
      {links.map((link) => (
        <Styled.Link key={link.url} href={link.href} highlight={link.highlight}>
          {link.url}
        </Styled.Link>
      ))}
      {children}
    </Styled.Container>
  )
}
