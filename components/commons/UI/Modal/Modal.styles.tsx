import styled from 'styled-components'
import { tablet } from '../../../../utils/breakpoints'

export const Container = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  width: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  z-index: 99999;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  padding: 20px;

  ${tablet} {
    padding: 40px 35px;
  }
`

export const CloseIcon = styled.img`
  width: 7px;
  height: 7px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;

  ${tablet} {
    right: 20px;
    top: 20px;
  }
`
