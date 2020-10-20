import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: #ff0000;
  margin: 0 8px;
  justify-content: center;
  box-sizing: border-box;
  max-height: 40px;
  max-width: 40px;
  padding: 12px;
  transition: all 0.5s;
  cursor: pointer;

  & span {
    white-space: nowrap;
    max-width: 0px;
    overflow: hidden;
    transition: all 0.5s;
  }

  &:hover {
    max-width: 183px;

    & span {
      margin: 0 5px;
      max-width: 132px;
    }
  }
`
