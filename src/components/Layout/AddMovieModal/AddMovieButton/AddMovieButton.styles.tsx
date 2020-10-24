import styled from 'styled-components'
import BaseButton from '../../../UI/BaseButton/BaseButton'

export const Button = styled(BaseButton)<{ disabled?: boolean }>`
  height: 70px;
  border-radius: 35px;
  background-color: #000000;
  width: 100%;
  display: flex;
  max-height: initial;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => (props.disabled ? '#dedede' : '#000000')};
`
