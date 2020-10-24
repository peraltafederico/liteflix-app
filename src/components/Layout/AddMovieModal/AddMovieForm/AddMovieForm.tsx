import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import Input from '../../../UI/Input/Input'
import AddMovieDropzone from './AddMovieDropzone/AddMovieDropzone'
import * as Styled from './AddMovieForm.styles'
import AddMovieProgress from './AddMovieProgress/AddMovieProgress'

interface Props {
  onPublishMovie: () => void
}

const xhr = new XMLHttpRequest()

export default function AddMovieForm({ onPublishMovie }: Props): ReactElement {
  const [uploading, setUploading] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [error, setError] = useState(false)
  const [progress, setProgress] = useState(0)
  const [file, setFile] = useState({} as Blob)

  useEffect(() => {
    xhr.upload.onprogress = (event) => {
      const percentage = +((event.loaded / event.total) * 100).toFixed(0)

      setProgress(percentage)
    }

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) {
        return
      }

      if (xhr.status === 0) {
        setProgress(0)
        setUploading(false)

        return
      }

      if (xhr.status !== 200) {
        setUploading(false)
        setError(true)

        return
      }

      setUploading(false)
      setCompleted(true)
    }

    return () => xhr.abort()
  }, [])

  const handleDrop = useCallback(([acceptedFile]) => {
    setFile(acceptedFile)
    sendFile(acceptedFile)
  }, [])

  const sendFile = (acceptedFile: Blob) => {
    setUploading(true)

    const data = new FormData()
    data.append('file', acceptedFile)

    xhr.open('POST', 'https://httpbin.org/post')
    xhr.send(data)
  }

  const clean = () => {
    setError(false)
    setProgress(0)
  }

  const handleRetry = () => {
    clean()
    sendFile(file)
  }

  const handleCancel = () => xhr.abort()

  return (
    <>
      {uploading || completed || error ? (
        <AddMovieProgress
          onCancel={handleCancel}
          onRetry={handleRetry}
          error={error}
          progress={progress}
          uploading={uploading}
        />
      ) : (
        <AddMovieDropzone onDrop={handleDrop} />
      )}
      <Styled.InputsContainer>
        <Styled.InputContainer>
          <Input label="Nombre de la película" />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Input label="Categoría" />
        </Styled.InputContainer>
      </Styled.InputsContainer>
      <Styled.Footer>
        <Styled.Button
          disabled={error || !completed}
          onClick={onPublishMovie}
          text="Subir Película"
        />
      </Styled.Footer>
    </>
  )
}
