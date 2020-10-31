import api from './api'

const create = (payload: any) => api.post('/movie', payload)

const getMain = () => api.get('/movie/main')

const getGroupedByGenre = () => api.get('/movie/grouped-by-genre')

const getGenres = () => api.get('/movie/genres')

export default {
  getMain,
  getGroupedByGenre,
  create,
  getGenres,
}
