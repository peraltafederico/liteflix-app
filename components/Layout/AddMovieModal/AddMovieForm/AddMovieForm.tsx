import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import getConfig from 'next/config'
import Input from '../../../commons/UI/Input/Input'
import AddMovieDropzone from './AddMovieDropzone/AddMovieDropzone'
import * as Styled from './AddMovieForm.styles'
import AddMovieProgress from './AddMovieProgress/AddMovieProgress'
import { Option, Select } from '../../../commons/UI/Select/Select'

const { publicRuntimeConfig } = getConfig()

// TODO: Add types

const {
  cloudinaryBaseUrl,
  cloudinaryUploadPreset,
  cloudinaryCloudName,
} = publicRuntimeConfig

interface Props {
  onSubmit: (values: any) => void
  loading: boolean
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  tmdbGenreId: Yup.number().required('Required'),
  imgUrl: Yup.string().required('Required'),
})

const options = [
  {
    text: 'Sarasa 1',
    value: 1,
  },
  {
    text: 'Sarasa 2',
    value: 2,
  },
  {
    text: 'Sarasa 3',
    value: 3,
  },
  {
    text: 'Sarasa 4',
    value: 4,
  },
  {
    text: 'Sarasa 5',
    value: 5,
  },
  {
    text: 'Sarasa 6',
    value: 6,
  },
  {
    text: 'Sarasa 7',
    value: 7,
  },
  {
    text: 'Sarasa 8',
    value: 8,
  },
]

export default function AddMovieForm({
  onSubmit,
  loading,
}: Props): ReactElement {
  const [upload, setUpload] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [error, setError] = useState(false)
  const [progress, setProgress] = useState(0)
  const [file, setFile] = useState({} as Blob)
  const [cancel, setCancel] = useState(false)

  const {
    submitForm,
    isValid,
    handleChange,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: { title: '', tmdbGenreId: '', imgUrl: '' },
    onSubmit,
    validationSchema,
    validateOnMount: true,
    isInitialValid: false,
  })

  useEffect(() => {
    const source = axios.CancelToken.source()

    const sendFile = async () => {
      const data = new FormData()
      data.append('file', file)
      data.append('upload_preset', cloudinaryUploadPreset as string)

      try {
        const { data: res } = await axios.post(
          `${cloudinaryBaseUrl}/v1_1/${cloudinaryCloudName}/upload`,
          data,
          {
            onUploadProgress,
            cancelToken: source.token,
          }
        )

        setFieldValue('imgUrl', res.url)
        setCompleted(true)
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(true)
          setProgress(0)
        }
      } finally {
        setUpload(false)
      }
    }

    if (cancel) {
      source.cancel()
      setCancel(false)
      setUpload(false)
      setProgress(0)
    }

    if (upload && !cancel) {
      sendFile()
    }

    return () => source.cancel()
  }, [file, upload, cancel, setFieldValue])

  const handleDrop = useCallback(([acceptedFile]) => {
    setFile(acceptedFile)
    setUpload(true)
  }, [])

  const onUploadProgress = (event: ProgressEvent<EventTarget>) => {
    const percentage = +((event.loaded / event.total) * 100).toFixed(0)

    setProgress(percentage)
  }

  const handleRetry = () => {
    setUpload(true)
    setError(false)
  }

  const handleCancel = () => setCancel(true)

  return (
    <>
      {upload || completed || error ? (
        <AddMovieProgress
          onCancel={handleCancel}
          onRetry={handleRetry}
          error={error}
          progress={progress}
          uploading={upload}
        />
      ) : (
        <AddMovieDropzone onDrop={(files) => handleDrop(files)} />
      )}
      <Styled.Form>
        <input type="hidden" name="imgUrl" value={values.imgUrl} />
        <Styled.InputsContainer>
          <Styled.InputContainer>
            <Input
              label="Nombre de la película"
              inputProps={{
                name: 'title',
                onChange: handleChange,
                value: values.title,
              }}
            />
          </Styled.InputContainer>
          <Styled.InputContainer>
            <Select
              onChange={(value) => setFieldValue('tmdbGenreId', value)}
              value={values.tmdbGenreId}
            >
              {options.map((option) => (
                <Option
                  text={option.text}
                  key={option.text}
                  value={option.value}
                />
              ))}
            </Select>
          </Styled.InputContainer>
        </Styled.InputsContainer>

        <Styled.Footer>
          <Styled.Button
            disabled={loading || !isValid}
            onClick={submitForm}
            text="Subir Película"
            type="button"
            loading={loading}
          />
        </Styled.Footer>
      </Styled.Form>
    </>
  )
}
