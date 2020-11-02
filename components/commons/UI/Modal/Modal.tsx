import React, { ReactElement } from 'react'
import Backdrop from '../Backdrop/Backdrop'
import * as Styled from './Modal.styles'

interface Props {
  onClose: () => void
  children: ReactElement
  show: boolean
}

export default function Modal({
  onClose,
  children,
  show,
  ...props
}: Props): ReactElement {
  return (
    <>
      {show && <Backdrop onClick={onClose} />}
      <Styled.Container {...props}>
        <Styled.CloseIcon src="/images/close.svg" onClick={onClose} />
        {children}
      </Styled.Container>
    </>
  )
}
