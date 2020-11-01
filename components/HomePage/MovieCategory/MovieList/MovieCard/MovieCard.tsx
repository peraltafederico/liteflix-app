import React, { ReactElement } from 'react'
import * as Styled from './MovieCard.styles'
import LargeDetails from './LargeDetails/LargeDetails'
import SmallDetails from './SmallDetails/SmallDetails'

interface Props {
  children: ReactElement
  size: 'small' | 'large'
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
        {size === 'large' ? (
          <LargeDetails title={title} genre={genre} />
        ) : (
          <SmallDetails title={title} genre={genre} />
        )}
      </Styled.DetailsContainer>
    </Styled.Container>
  )
}
