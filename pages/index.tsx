import React, { ReactElement } from 'react'
import { useQuery } from 'react-query'
import { AxiosResponse } from 'axios'
import HeroImage from '../components/HomePage/HeroImage/HeroImage'
import api from '../services'
import HomeSpinner from '../components/HomePage/HomeSpinner/HomeSpinner'
import UpcomingMovies from '../components/HomePage/UpcomingMovies/UpcomingMovies'
import PopularMovies from '../components/HomePage/PopularMovies/PopularMovies'
import GenreMovies from '../components/HomePage/GenreMovies/GenreMovies'
import { GroupedByGenreMovie, MainMovies } from '../interfaces'

interface Props extends MainMovies {
  groupedByGenre: GroupedByGenreMovie[]
}

export default function Home({
  featured,
  upcoming,
  popular,
  groupedByGenre,
}: Props): ReactElement {
  const { data: response, isFetching } = useQuery(
    'genreMovies',
    api.movies.getGroupedByGenre,
    {
      initialData: { data: groupedByGenre } as AxiosResponse<
        GroupedByGenreMovie[]
      >,
    }
  )

  return (
    <>
      <HeroImage
        title={featured.title || ''}
        overview={featured.overview || ''}
        imgUrl={featured.imgUrl || ''}
        genre={featured.genre || ''}
      />
      <UpcomingMovies movies={upcoming || []} />
      <PopularMovies movies={popular || []} />
      {isFetching ? (
        <HomeSpinner />
      ) : (
        (response?.data || []).map((group) => (
          <GenreMovies
            title={group.genre}
            key={group.genre}
            movies={group.movies}
          />
        ))
      )}
    </>
  )
}

export async function getServerSideProps(): Promise<{ props: Props }> {
  const [{ data: mainMovies }, { data: genresMovies }] = await Promise.all([
    api.movies.getMain(),
    api.movies.getGroupedByGenre(),
  ])

  return {
    props: {
      ...mainMovies,
      groupedByGenre: genresMovies,
    },
  }
}
