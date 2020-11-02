import { AxiosResponse } from 'axios'
import { Genre, GroupedByGenreMovie, MainMovies, RawMovie } from '../interfaces'
import api from './api'

const create = (payload: RawMovie): Promise<AxiosResponse<RawMovie>> =>
  api.post('/movie', payload)

const getMain = (): Promise<AxiosResponse<MainMovies>> => api.get('/movie/main')

const getGroupedByGenre = (): Promise<AxiosResponse<GroupedByGenreMovie[]>> =>
  api.get('/movie/grouped-by-genre')

const getGenres = (): Promise<AxiosResponse<Genre[]>> =>
  api.get('/movie/genres')

export default {
  getMain,
  getGroupedByGenre,
  create,
  getGenres,
}
