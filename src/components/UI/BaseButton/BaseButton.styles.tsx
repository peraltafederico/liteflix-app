import styled from 'styled-components'

export const Container = styled.button<{ disabled?: boolean }>`
  min-width: 64px;
  max-height: 40px;
  padding: 11px;
  justify-content: center;
  /* opacity: 0.5; */
  border-radius: 20px;
  background-color: ${(props) => (props.disabled ? '#dedede' : '#000000')};
  display: flex;
  font-size: 16px;
  color: #ffffff;
  border: 0;
  cursor: pointer;

  & {
    outline: none;
  }
`
