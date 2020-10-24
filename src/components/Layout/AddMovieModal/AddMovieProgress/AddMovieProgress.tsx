import React, { ReactElement } from 'react'
import ProgressBar from '../../../UI/ProgressBar/ProgressBar'

import * as Styled from './AddMovieProgress.styles'

interface Props {
  progress: number
  error: boolean
  uploading: boolean
  onRetry: () => void
  onCancel: () => void
}

export default function AddMovieProgress({
  progress,
  error,
  uploading,
  onRetry,
  onCancel,
}: Props): ReactElement {
  const getProgressBarText = () => {
    if (uploading) {
      return `Cargando ${progress}%`
    }

    if (error) {
      return (
        <>
          <b>Error!</b> No se pudo cargar la película
        </>
      )
    }

    return <b>{progress}% Cargado</b>
  }

  return (
    <Styled.ProgressBarContainer>
      <Styled.ProgressBarText>{getProgressBarText()}</Styled.ProgressBarText>
      <ProgressBar progress={progress} error={error} />
      {(error || uploading) && (
        <Styled.ProgressBarButtonContainer>
          <Styled.ProgressBarButton onClick={error ? onRetry : onCancel}>
            {error ? 'Reintentar' : 'Cancelar'}
          </Styled.ProgressBarButton>
        </Styled.ProgressBarButtonContainer>
      )}
    </Styled.ProgressBarContainer>
  )
}
