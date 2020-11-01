import React, { ReactElement } from 'react'
import * as Styled from './MovieCard.styles'
import LargeDetails from './LargeDetails/LargeDetails'
import { CardSize } from '../../../interfaces'
import WideDetails from './WideDetails/WideDetails'

interface Props {
  children: ReactElement
  size: CardSize
  title: string
  genre: string
}

export default function MovieCard({
  children,
  size,
  title,
  genre,
  ...props
}: Props): ReactElement {
  return (
    <Styled.Container size={size} {...props}>
      {children}
      <Styled.DetailsContainer>
        {size === 'large' && <LargeDetails title={title} genre={genre} />}
        {size === 'wide' && <WideDetails title={title} genre={genre} />}
      </Styled.DetailsContainer>
    </Styled.Container>
  )
}
