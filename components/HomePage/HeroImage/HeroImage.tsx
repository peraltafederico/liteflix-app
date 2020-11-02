import { noop } from 'lodash'
import React, { ReactElement } from 'react'
import useBreakpoints from '../../../hooks/useBreakpoints'
import * as Styled from './HeroImage.styles'

interface Props {
  title: string
  overview: string
  imgUrl: string
  genre: string
}

export default function HeroImage({
  title,
  overview,
  imgUrl,
  genre,
}: Props): ReactElement {
  const { desktop, mobile, tablet } = useBreakpoints()

  return (
    <Styled.Container background={imgUrl}>
      <Styled.Content>
        <Styled.TextAboveTitle>
          ORIGINAL DE <Styled.HighlightText>LITEFLIX</Styled.HighlightText>
        </Styled.TextAboveTitle>
        <Styled.Main>
          <Styled.Title>{title}</Styled.Title>
          <Styled.ActionsContainer>
            <Styled.Button onClick={noop}>
              <Styled.PlayIcon src="/images/play.svg" />
              <Styled.ButtonText>Reproducir</Styled.ButtonText>
            </Styled.Button>
            {(mobile || tablet) && (
              <Styled.CirclePlusIcon src="/images/circle-plus.svg" />
            )}
            {desktop && (
              <Styled.Button onClick={noop}>
                <Styled.PlusIcon src="/images/plus.svg" />
                <Styled.ButtonText>Mi Lista</Styled.ButtonText>
              </Styled.Button>
            )}
          </Styled.ActionsContainer>
        </Styled.Main>
        {desktop && (
          <Styled.TextContainer>
            <Styled.Genre>{genre}</Styled.Genre>
            <Styled.Description
              text={overview}
              maxLine="5"
              ellipsis="..."
              trimRight
              basedOn="words"
              component="p"
            />
          </Styled.TextContainer>
        )}
      </Styled.Content>
    </Styled.Container>
  )
}
