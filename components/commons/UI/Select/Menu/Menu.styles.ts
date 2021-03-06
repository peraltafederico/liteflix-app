import styled from 'styled-components'
import { tablet } from '../../../../../utils/breakpoints'

export const Container = styled.div`
  position: absolute;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
  width: 200%;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 20px 30px 20px 20px;
  top: -27px;
  right: 0px;
  max-height: 260px;
  box-sizing: border-box;
  overflow: hidden;

  ${tablet} {
    width: 100%;
    left: 0px;
  }
`
export const Options = styled.ul`
  display: flex;
  overflow-y: auto;
  max-height: 220px;
  flex-flow: column;
  list-style: none;
  padding: 0;
  margin: 0;

  scrollbar-width: thin;
  scrollbar-color: #9b9b9b #f3f3f3;

  ::-webkit-scrollbar {
    width: 11px;
  }
  ::-webkit-scrollbar-track {
    background: #f3f3f3;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #9b9b9b;
    border-radius: 5.5px;
  }
`
