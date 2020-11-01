import React, { ReactElement } from 'react'
import { useQuery } from 'react-query'
import HeroImage from '../components/HomePage/HeroImage/HeroImage'
import api from '../services'
import HomeSpinner from '../components/HomePage/HomeSpinner/HomeSpinner'
import UpcomingMovies from '../components/HomePage/UpcomingMovies/UpcomingMovies'
import PopularMovies from '../components/HomePage/PopularMovies/PopularMovies'
import GenreMovies from '../components/HomePage/GenreMovies/GenreMovies'

export default function Home({
  featured,
  upcoming,
  popular,
  groupedByGenre,
}: any): ReactElement {
  const { data: response, isFetching } = useQuery(
    'genreMovies',
    api.movies.getGroupedByGenre,
    {
      initialData: groupedByGenre,
    }
  )

  return (
    <>
      <HeroImage
        title={featured?.title}
        overview={featured?.overview}
        imgUrl={featured?.imgUrl}
        genre={featured?.genre}
      />
      <UpcomingMovies movies={upcoming || []} />
      <PopularMovies movies={popular || []} />
      {isFetching ? (
        <HomeSpinner />
      ) : (
        (response?.data || groupedByGenre).map((group: any) => (
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

export async function getServerSideProps(): Promise<any> {
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
