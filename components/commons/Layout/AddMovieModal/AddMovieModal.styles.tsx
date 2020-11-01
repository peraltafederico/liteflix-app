import styled from 'styled-components'
import { tablet } from '../../../../utils/breakpoints'
import CommonModal from '../../UI/Modal/Modal'

export const Modal = styled(CommonModal)<{ success: boolean; state: string }>`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  min-height: 320px;

  justify-content: ${(props) => (props.success ? 'space-between' : 'initial')};
  background-color: ${(props) => (props.success ? '#7ed321' : '#ffffff')};

  transition: transform 0.2s linear, opacity 0.2s linear,
    background-color 0.3s ease-in-out;

  ${tablet} {
    max-width: 730px;
    min-height: 354px;
  }

  opacity: ${({ state }) => {
    switch (state) {
      case 'entering':
        return 0
      case 'entered':
        return 1
      default:
        return 0
    }
  }};

  transform: ${({ state }) => {
    switch (state) {
      case 'entering':
        return 'translate(-50%, -100%)'
      case 'entered':
        return 'translate(-50%, -50%)'
      default:
        return 'translate(-50%, -100%)'
    }
  }};
`
