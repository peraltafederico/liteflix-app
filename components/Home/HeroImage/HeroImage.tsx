import React, { ReactElement } from 'react'
import useWindowsSize from '../../../hooks/useWindowsSize'
import * as Styled from './HeroImage.styles'

export default function HeroImage(): ReactElement {
  const { desktop, mobile, tablet } = useWindowsSize()

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.TextAboveTitle>
          ORIGINAL DE <Styled.HighlightText>LITEFLIX</Styled.HighlightText>
        </Styled.TextAboveTitle>
        <Styled.Main>
          <Styled.Title>Kids at school</Styled.Title>
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
            <Styled.ParagraphTitle>Ver temporada 1</Styled.ParagraphTitle>
            <Styled.Paragraph>
              Lorem ipsum dolor amet chicharrones dreamcatcher hammock bushwick
              hell of, ethical 3 wolf moon celiac neutra mumblecore four dollar
              toast. Slow-carb post-ironic kickstarter synth franzen.
            </Styled.Paragraph>
          </Styled.TextContainer>
        )}
      </Styled.Content>
    </Styled.Container>
  )
}
