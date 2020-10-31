import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputElement = styled.input`
  border: none;
  border-bottom: 1px solid #000000;
  font-family: 'Montserrat';
  font-size: 16px;
  color: #000000;
  padding: 5px 0;
  width: 100%;

  &:focus {
    outline: none;
    border-bottom: 1px solid #0076ff;
  }
`

export const Label = styled.label`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 5px;
  color: #9b9b9b;
  text-transform: uppercase;
  margin-bottom: 5px;
`
