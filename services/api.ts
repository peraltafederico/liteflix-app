import axios from 'axios'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const { liteflixBffBaseUrl } = publicRuntimeConfig

const api = axios.create({ baseURL: 'https://liteflix-movies.herokuapp.com' })

export default api
