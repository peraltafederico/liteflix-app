export type User = {
  id: number
  name: string
}

export type CardSize = 'large' | 'wide'

export interface Movie {
  title: string
  genre: string
  imgUrl: string
}

export interface MainMovies {
  featured: Movie & { overview: string }
  upcoming: Movie[]
  popular: Movie[]
}

export interface GroupedByGenreMovie {
  movies: Movie[]
  genre: string
}

export interface Genre {
  id: number
  name: string
}

export interface RawMovie {
  tmdbGenreId: number
  imgUrl: string
  title: string
}

export interface RawMovieForm {
  tmdbGenreId: string
  imgUrl: string
  title: string
}
