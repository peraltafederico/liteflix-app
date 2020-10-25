import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { Field, Formik } from 'formik'
import * as Yup from 'yup'
import * as dotenv from 'dotenv'
import Input from '../../../UI/Input/Input'
import AddMovieDropzone from './AddMovieDropzone/AddMovieDropzone'
import * as Styled from './AddMovieForm.styles'
import AddMovieProgress from './AddMovieProgress/AddMovieProgress'

// TODO: Add types
// TODO: Add config file

dotenv.config()

const {
  REACT_APP_CLOUDINARY_BASE_URL,
  REACT_APP_CLOUDINARY_UPLOAD_PRESET,
  REACT_APP_CLOUDINARY_CLOUD_NAME,
} = process.env

interface Props {
  onSubmit: (values: any) => void
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
  imgUrl: Yup.string().required('Required'),
})

// ? Replace xhr by axios?

const xhr = new XMLHttpRequest()

export default function AddMovieForm({ onSubmit }: Props): ReactElement {
  const [uploading, setUploading] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [error, setError] = useState(false)
  const [progress, setProgress] = useState(0)
  const [file, setFile] = useState({} as Blob)
  const [imgUrl, setImgUrl] = useState('')

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

      const { url } = JSON.parse(xhr.response)

      setImgUrl(url)
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
    data.append('upload_preset', REACT_APP_CLOUDINARY_UPLOAD_PRESET as string)

    xhr.open(
      'POST',
      `${REACT_APP_CLOUDINARY_BASE_URL}/v1_1/${REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`
    )

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
              if (form.values.imgUrl !== imgUrl) {
                form.setFieldValue('imgUrl', imgUrl)
              }

              return uploading || completed || error ? (
                <AddMovieProgress
                  onCancel={handleCancel}
                  onRetry={() => handleRetry()}
                  error={error}
                  progress={progress}
                  uploading={uploading}
                />
              ) : (
                <AddMovieDropzone onDrop={(files) => handleDrop(files)} />
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
