import styled from 'styled-components'
import { tablet } from '../../utils/breakpoints'

export const Header = styled.div`
  height: 41px;
  display: flex;
  align-items: center;
  background-color: #000;
  padding: 0px 15px;

  ${tablet} {
    height: 61px;
    padding: 0px 30px;
  }
`

export const Navigation = styled.div`
  display: flex;
  width: inherit;
  justify-content: space-between;

  position: relative;
  bottom: -7px;
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
`

export const Logo = styled.img``
