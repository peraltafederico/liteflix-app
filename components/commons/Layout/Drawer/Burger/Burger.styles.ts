import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  & > * {
    margin-bottom: 5px;
  }
`

export const Line = styled.div`
  width: 20px;
  height: 1px;
  background-color: #ffffff;
`
