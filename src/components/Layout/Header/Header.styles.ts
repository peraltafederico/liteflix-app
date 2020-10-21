import styled from 'styled-components'
import { desktop } from '../../../utils/breakpoints'

export const Header = styled.div`
  height: 41px;
  display: flex;
  align-items: center;
  background-color: #000;
  padding: 0px 15px;

  ${desktop} {
    height: 61px;
    padding: 10px 30px 0 30px;
  }
`

export const Navigation = styled.div`
  display: flex;
  width: inherit;
  justify-content: space-between;
`

export const Content = styled.div<{ mobile: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  max-width: 1600px;

  ${desktop} {
    align-items: baseline;
    justify-content: 'initial';
  }
`

export const BurgerIconContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const LogoContainer = styled.div`
  flex: 1;
`

export const Logo = styled.img``

export const BurgerContainer = styled.div<{ mobile?: boolean }>`
  position: absolute;
  left: 0;

  ${desktop} {
    position: static;
    left: initial;
  }
`
