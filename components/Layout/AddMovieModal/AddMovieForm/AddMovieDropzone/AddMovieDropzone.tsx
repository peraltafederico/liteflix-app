import React, { ReactElement } from 'react'
import {
  DropEvent,
  FileRejection,
  useDropzone,
} from 'react-dropzone/dist/index'
import useWindowsSize from '../../../../../hooks/useWindowsSize'

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
  const { getRootProps, getInputProps } = useDropzone({ onDrop })
  const { mobile, desktop, tablet } = useWindowsSize()

  return (
    <Styled.Dropzone {...getRootProps()}>
      <input {...getInputProps()} />
      <Styled.ClipIcon src="/images/clip.png" alt="clip" />
      <Styled.DropzoneText>
        {mobile && <b>Agregar archivo</b>}
        {(desktop || tablet) && (
          <>
            <b>Agregar archivo</b> o arrastrarlo y soltarlo aquí
          </>
        )}
      </Styled.DropzoneText>
    </Styled.Dropzone>
  )
}
