import React, { ReactElement } from 'react'
import useWindowsSize from '../../../hooks/useWindowsSize'
import * as Styled from './HeroImage.styles'

interface Props {
  title: string
  overview: string
  imgUrl: string
  paragraphTitle?: string
}

export default function HeroImage({
  title,
  overview,
  imgUrl,
  paragraphTitle
}: Props): ReactElement {
  const { desktop, mobile, tablet } = useWindowsSize()

  return (
    <Styled.Container background={imgUrl}>
      <Styled.Content>
        <Styled.TextAboveTitle>
          ORIGINAL DE <Styled.HighlightText>LITEFLIX</Styled.HighlightText>
        </Styled.TextAboveTitle>
        <Styled.Main>
          <Styled.Title>{title}</Styled.Title>
          <Styled.ActionsContainer>
            <Styled.Button onClick={() => console.log('a')}>
              <Styled.PlayIcon src="/images/play.svg" />
              <Styled.ButtonText>Reproducir</Styled.ButtonText>
            </Styled.Button>
            {mobile && <Styled.CirclePlusIcon src="/images/circle-plus.svg" />}
            {(tablet || desktop) && (
              <Styled.Button onClick={() => console.log('a')}>
                <Styled.PlusIcon src="/images/plus.svg" />
                <Styled.ButtonText>Mi Lista</Styled.ButtonText>
              </Styled.Button>
            )}
          </Styled.ActionsContainer>
        </Styled.Main>
        {(tablet || desktop) && (
          <Styled.TextContainer>
            {paragraphTitle && <Styled.ParagraphTitle>Ver temporada 1</Styled.ParagraphTitle>}
            <Styled.Paragraph>{overview}</Styled.Paragraph>
          </Styled.TextContainer>
        )}
      </Styled.Content>
    </Styled.Container>
  )
}
