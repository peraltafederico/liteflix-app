import styled from 'styled-components'
import { tablet } from '../../../utils/breakpoints'
import CommonModal from '../../commons/UI/Modal/Modal'

export const Modal = styled(CommonModal)<{ success: boolean }>`
  padding: 20px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  min-height: 320px;
  justify-content: ${(props) => (props.success ? 'space-between' : 'initial')};
  background-color: ${(props) => (props.success ? '#7ed321' : '#ffffff')};

  ${tablet} {
    max-width: 730px;
    padding: 40px 35px;
    min-height: 354px;
  }
`
