import api from './api'

const create = (payload: any) => api.post('/movie', payload)

const getMain = () => api.get('/movie/main')

const getGroupedByGenre = async () => api.get('/movie/grouped-by-genre')

export default {
  getMain,
  getGroupedByGenre,
  create,
}
