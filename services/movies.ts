import api from './api'

const create = (payload) => api.post('/movie', payload)

const getMain = () => api.get('/movie/main')

const getGroupedByGenre = () => api.get('/movie/grouped-by-genre')

export default {
  getMain,
  getGroupedByGenre,
  create,
}
