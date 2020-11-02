import React, { ReactElement } from 'react'
import {
  DropEvent,
  FileRejection,
  useDropzone,
} from 'react-dropzone/dist/index'
import useDevices from '../../../../../../hooks/useDevices'

import * as Styled from './AddMovieDropzone.styles'

interface Props {
  onDrop:
    | (<T extends File>(
        acceptedFiles: T[],
        fileRejections: FileRejection[],
        event: DropEvent
      ) => void)
    | undefined
}

export default function AddMovieDropzone({ onDrop }: Props): ReactElement {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png',
  })

  const { isMobile, isDesktop, isTablet } = useDevices()

  return (
    <Styled.Dropzone {...getRootProps()}>
      <input {...getInputProps()} />
      <Styled.ClipIcon src="/images/clip.png" alt="clip" />
      <Styled.DropzoneText>
        {(isMobile || isTablet) && <b>Agregar archivo</b>}
        {isDesktop && (
          <>
            <b>Agregar archivo</b> o arrastrarlo y soltarlo aquí
          </>
        )}
      </Styled.DropzoneText>
    </Styled.Dropzone>
  )
}
