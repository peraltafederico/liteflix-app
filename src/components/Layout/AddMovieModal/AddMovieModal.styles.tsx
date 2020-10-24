import styled from 'styled-components'
import { tablet } from '../../../utils/breakpoints'
import CommonModal from '../../UI/Modal/Modal'

export const Modal = styled(CommonModal)`
  padding: 20px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  min-height: 320px;

  ${tablet} {
    max-width: 730px;
    padding: 40px;
    min-height: 354px;
  }
`

export const InputContainer = styled.div`
  flex: 1;
`

export const InputsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  & ${InputContainer}:nth-child(1) {
    margin-right: 15px;
  }

  & ${InputContainer}:nth-child(2) {
    margin-left: 15px;
  }
`

export const Footer = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: center;
`
