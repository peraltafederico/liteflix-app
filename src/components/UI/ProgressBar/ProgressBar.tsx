import React, { ReactElement } from 'react'
import * as Styled from './ProgressBar.styles'

interface Props {
  progress: number
  error: boolean
}

export default function ProgressBar({ progress, error }: Props): ReactElement {
  return (
    <Styled.Container>
      <Styled.Progress progress={progress} error={error} />
    </Styled.Container>
  )
}
