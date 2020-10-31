import React, { ReactElement } from 'react'
import * as Styled from './LargeDetails.styles'

export default function LargeDetails(): ReactElement {
  return (
    <Styled.Container>
      <Styled.InfoContainer>
        <Styled.PlayIconContainer>
          <Styled.PlayIcon src="/images/circle-play.svg" />
        </Styled.PlayIconContainer>
        <Styled.InfoTitle>Secret City</Styled.InfoTitle>
        <Styled.InfoText>
          98% Coincidencia <Styled.Age>+16</Styled.Age> 1h 30 min Suspenso
        </Styled.InfoText>
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
