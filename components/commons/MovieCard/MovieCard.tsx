import React, { ReactElement } from 'react'
import * as Styled from './MovieCard.styles'
import LargeDetails from './LargeDetails/LargeDetails'
import SmallDetails from './SmallDetails/SmallDetails'

interface Props {
  children: ReactElement
  size: 'small' | 'large'
}

export default function MovieCard({
  children,
  size,
  ...props
}: Props): ReactElement {
  return (
    <Styled.Container size={size} {...props}>
      {children}
      <Styled.DetailsContainer>
        {size === 'large' ? <LargeDetails /> : <SmallDetails />}
      </Styled.DetailsContainer>
    </Styled.Container>
  )
}
