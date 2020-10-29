import api from './api'


const getMainMovies = () => api.get('/movie/main')

const getGroupedByGenreMovies = () => api.get('/movie/grouped-by-genre')


export default {
    getMainMovies,
    getGroupedByGenreMovies
}