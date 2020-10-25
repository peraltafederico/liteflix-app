import React, { ReactElement } from 'react'
import * as Styled from './ProgressBar.styles'

interface Props {
  progress: number
  error: boolean
}

export default function ProgressBar({
  progress,
  error,
  ...props
}: Props): ReactElement {
  return (
    <Styled.Container>
      <Styled.Progress progress={progress} error={error} {...props} />
    </Styled.Container>
  )
}
