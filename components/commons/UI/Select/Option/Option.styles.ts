import styled from 'styled-components'

export const Option = styled.li`
  padding: 8px 0;
  margin-right: 20px;
  line-height: 2.5;

  &:not(:last-child) {
    border-bottom: 1px solid #cccccc;
  }

  cursor: pointer;
  color: #9b9b9b;

  &:hover {
    color: #000000;
  }
`
