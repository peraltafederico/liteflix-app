import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { Field, Formik } from 'formik'
import * as Yup from 'yup'
import Input from '../../../UI/Input/Input'
import AddMovieDropzone from './AddMovieDropzone/AddMovieDropzone'
import * as Styled from './AddMovieForm.styles'
import AddMovieProgress from './AddMovieProgress/AddMovieProgress'

interface Props {
  onSubmit: (values: any) => void
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
  imgUrl: Yup.string().required('Required'),
})

const xhr = new XMLHttpRequest()

// TODO: Add types
// TODO: Replace xhr by axios

export default function AddMovieForm({ onSubmit }: Props): ReactElement {
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

  const handleDrop = useCallback(([acceptedFile], setImgUrl) => {
    setFile(acceptedFile)
    sendFile(acceptedFile, setImgUrl)
  }, [])

  const sendFile = (acceptedFile: Blob, setImgUrl: any) => {
    setUploading(true)

    const data = new FormData()
    data.append('file', acceptedFile)

    xhr.open('POST', 'https://httpbin.org/post')
    xhr.send(data)

    setImgUrl()
  }

  const clean = () => {
    setError(false)
    setProgress(0)
  }

  const handleRetry = (setImgUrl: any) => {
    clean()
    sendFile(file, setImgUrl)
  }

  const handleCancel = () => xhr.abort()

  return (
    <Formik
      initialValues={{ name: '', category: '', imgUrl: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnMount={true}
      isInitialValid={false}
    >
      {({ submitForm, isValid }) => (
        <Styled.Form>
          <Field type="hidden" name="imgUrl">
            {({ form }: any) => {
              const setImgUrl = () => form.setFieldValue('imgUrl', 'hola')

              return uploading || completed || error ? (
                <AddMovieProgress
                  onCancel={handleCancel}
                  onRetry={() => handleRetry(setImgUrl)}
                  error={error}
                  progress={progress}
                  uploading={uploading}
                />
              ) : (
                <AddMovieDropzone
                  onDrop={(files) => handleDrop(files, setImgUrl)}
                />
              )
            }}
          </Field>
          <Styled.InputsContainer>
            <Styled.InputContainer>
              <Input name="name" label="Nombre de la película" />
            </Styled.InputContainer>
            <Styled.InputContainer>
              <Input name="category" label="Categoría" />
            </Styled.InputContainer>
          </Styled.InputsContainer>

          <Styled.Footer>
            <Styled.Button
              disabled={!isValid}
              onClick={submitForm}
              text="Subir Película"
              type="button"
            />
          </Styled.Footer>
        </Styled.Form>
      )}
    </Formik>
  )
}
