import React, { ReactElement, useEffect } from 'react'
import Backdrop from '../Backdrop/Backdrop'
import * as Styled from './Modal.styles'

interface Props {
  onClose: () => void
  children: React.ReactNode
  show: boolean
}

export default function Modal({
  onClose,
  children,
  show,
  ...props
}: Props): ReactElement {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [show])

  return (
    <>
      {show && <Backdrop onClick={onClose} />}
      <Styled.Container show={show} {...props}>
        {children}
      </Styled.Container>
    </>
  )
}
