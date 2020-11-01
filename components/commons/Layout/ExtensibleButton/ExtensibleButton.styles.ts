import styled from 'styled-components'
import { desktop } from '../../../../utils/breakpoints'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: #ff0000;
  box-sizing: border-box;
  max-height: 40px;
  padding: 12px;
  transition: all 0.5s;
  cursor: pointer;

  ${desktop} {
    justify-content: center;
    max-width: 40px;
  }

  & span {
    white-space: nowrap;
    color: white;
    font-size: 14px;
    margin: 0 5px;

    ${desktop} {
      max-width: 0px;
      overflow: hidden;
      transition: all 0.5s;
      font-size: 16px;
      margin: initial;
    }
  }

  &:hover {
    ${desktop} {
      max-width: 183px;

      & span {
        margin: 0 5px;
        max-width: 132px;
      }
    }
  }
`

export const ExtensibleText = styled.span``
