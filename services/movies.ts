import { AxiosRequestConfig, AxiosResponse } from 'axios'
import getConfig from 'next/config'
import { Genre, GroupedByGenreMovie, MainMovies, RawMovie } from '../interfaces'
import apiBff from './apis/apiBff'
import apiCloudinary from './apis/apiCloudinary'

const { publicRuntimeConfig } = getConfig()

const { cloudinaryUploadPreset } = publicRuntimeConfig

const create = (payload: RawMovie): Promise<AxiosResponse<RawMovie>> =>
  apiBff.post('/movie', payload)

const getMain = (): Promise<AxiosResponse<MainMovies>> =>
  apiBff.get('/movie/main')

const getGroupedByGenre = (): Promise<AxiosResponse<GroupedByGenreMovie[]>> =>
  apiBff.get('/movie/grouped-by-genre')

const getGenres = (): Promise<AxiosResponse<Genre[]>> =>
  apiBff.get('/movie/genres')

const upload = (
  data: FormData,
  config: AxiosRequestConfig
): Promise<AxiosResponse<{ url: string }>> => {
  data.append('upload_preset', cloudinaryUploadPreset as string)

  return apiCloudinary.post('/upload', data, config)
}

export default {
  getMain,
  getGroupedByGenre,
  create,
  getGenres,
  upload,
}
