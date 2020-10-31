import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 20px 30px 20px 20px;
  top: -25px;
  left: 0px;
  max-height: 260px;
  box-sizing: border-box;
  overflow: hidden;
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

export const Option = styled.li`
  padding: 8px 0;
  margin-right: 20px;

  &:first-child {
    padding: 0 0 8px 0;
  }

  &:last-child {
    padding: 8px 0 0 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #cccccc;
  }

  cursor: pointer;
  color: #9b9b9b;

  &:hover {
    color: #000000;
  }
`
