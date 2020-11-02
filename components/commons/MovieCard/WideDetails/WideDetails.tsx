import React, { ReactElement } from 'react'
import * as Styled from './WideDetails.styles'

interface Props {
  title: string
  genre: string
}

export default function WideDetails({ title, genre }: Props): ReactElement {
  return (
    <>
      <Styled.Container>
        <Styled.InfoContainer>
          <Styled.ActionsContainer>
            <Styled.ActionIconContainer>
              <Styled.AddIcon src="/images/add-list.svg" />
            </Styled.ActionIconContainer>
            <Styled.ActionIconContainer>
              <Styled.LikeIcon src="/images/like.svg" />
            </Styled.ActionIconContainer>
          </Styled.ActionsContainer>
          <Styled.PlayIconContainer>
            <Styled.PlayIcon src="/images/circle-play.svg" />
          </Styled.PlayIconContainer>
          <Styled.MovieDta>
            <Styled.InfoTitle>{title}</Styled.InfoTitle>
            <Styled.InfoText>
              98% Coincidencia <Styled.Age>+16</Styled.Age> 1h 30 min
            </Styled.InfoText>
            <p style={{ margin: 0 }}>{genre}</p>
          </Styled.MovieDta>
        </Styled.InfoContainer>
      </Styled.Container>
      <Styled.OutsideArrowContainer>
        <Styled.ArrowIconContainer>
          <Styled.ArrowIcon src="/images/thin-arrow.svg" />
        </Styled.ArrowIconContainer>
      </Styled.OutsideArrowContainer>
    </>
  )
}
