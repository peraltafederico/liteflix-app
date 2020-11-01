import React, { ReactElement } from 'react'
import * as Styled from './LargeDetails.styles'

interface Props {
  title: string
  genre: string
}

export default function LargeDetails({ title, genre }: Props): ReactElement {
  return (
    <Styled.Container>
      <Styled.InfoContainer>
        <Styled.PlayIconContainer>
          <Styled.PlayIcon src="/images/circle-play.svg" />
        </Styled.PlayIconContainer>
        <Styled.InfoTitle>{title}</Styled.InfoTitle>
        <Styled.InfoText>
          98% Coincidencia <Styled.Age>+16</Styled.Age> 1h 30 min
        </Styled.InfoText>
        <p style={{ margin: 0 }}>{genre}</p>
      </Styled.InfoContainer>
      <Styled.LikeIconContainer>
        <Styled.LikeIcon src="/images/like.svg" />
      </Styled.LikeIconContainer>
      <Styled.ArrowIconContainer>
        <Styled.ArrowIcon src="/images/thin-arrow.svg" />
      </Styled.ArrowIconContainer>
    </Styled.Container>
  )
}
