import api from './api'

const create = (payload: any) => api.post('/movie', payload)

const getMain = () => api.get('/movie/main')

const getGroupedByGenre = async () => {
  const res = await api.get('/movie/grouped-by-genre')
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve()
    }, 3000)
  )

  return res
}

export default {
  getMain,
  getGroupedByGenre,
  create,
}
