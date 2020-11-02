import styled from 'styled-components'

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

  &:only-child {
    padding: 0;
  }

  cursor: pointer;
  color: #9b9b9b;

  &:hover {
    color: #000000;
  }
`
