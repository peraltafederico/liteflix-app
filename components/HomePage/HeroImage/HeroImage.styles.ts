import styled from 'styled-components'
import LinesEllipsis from 'react-lines-ellipsis'
import BaseButton from '../../commons/UI/BaseButton/BaseButton'
import { desktop } from '../../../utils/breakpoints'

export const Container = styled.div<{ background: string }>`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url('${props.background}')`};
  display: flex;
  align-items: flex-end;

  ${desktop} {
    display: block;
    align-items: initial;
  }
`

export const Content = styled.div`
  max-width: 1112px;
  margin: 0 auto;
  justify-content: flex-end;
  display: flex;
  flex-flow: wrap column;
  align-items: center;
  margin-bottom: 120px;

  ${desktop} {
    padding: 14vh 30px 0 30px;
    display: block;
    justify-content: initial;
  }
`

export const TextAboveTitle = styled.h2`
  font-size: 18px;
  color: #ffffff;
  font-weight: normal;
  margin: 0;

  ${desktop} {
    margin: 0 0 15px 0;
    font-size: 24px;
  }
`

export const HighlightText = styled.span`
  font-weight: bold;
  font-size: 18px;

  ${desktop} {
    font-size: 24px;
  }
`

export const Title = styled.h1`
  max-width: 660px;
  font-size: 72px;
  font-family: 'RobotoSlab';
  color: #fff;
  line-height: 1;
  margin: 0;

  ${desktop} {
    margin: 0 0 15px 0;
    line-height: 0.82;
    font-size: 110px;
  }
`

export const Button = styled(BaseButton)`
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  width: 160px;
  justify-content: flex-start;

  & img:first-child {
    margin-right: 5px;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  margin-top: 5px;

  ${desktop} {
    & ${Button}:nth-child(1) {
      margin-right: 10px;
    }

    & ${Button}:nth-child(2) {
      margin-left: 10px;
    }
  }
`

export const Genre = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 25px 0 0 0;
`

export const Description = styled(LinesEllipsis)`
  margin: 0;
  font-size: 18px;
  font-weight: normal;
  max-width: 537px;
`

export const Main = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  text-align: center;
  align-items: center;

  ${desktop} {
    align-items: initial;
    text-align: initial;
  }
`

export const PlayIcon = styled.img``

export const PlusIcon = styled.img``

export const CirclePlusIcon = styled.img`
  position: absolute;
  right: 10px;
  align-self: center;
`

export const TextContainer = styled.div`
  max-width: 537px;
`

export const ButtonText = styled.span`
  font-size: 16px;
  font-family: 'Montserrat';
`
