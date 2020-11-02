import React, { ReactElement } from 'react'
import { useQuery } from 'react-query'
import HeroImage from '../components/HomePage/HeroImage/HeroImage'
import api from '../services'
import HomeSpinner from '../components/HomePage/HomeSpinner/HomeSpinner'
import UpcomingMovies from '../components/HomePage/UpcomingMovies/UpcomingMovies'
import PopularMovies from '../components/HomePage/PopularMovies/PopularMovies'
import GenreMovies from '../components/HomePage/GenreMovies/GenreMovies'
import { MainMovies } from '../interfaces'

export default function Home({
  featured,
  upcoming,
  popular,
}: MainMovies): ReactElement {
  const { data: response, isFetching } = useQuery(
    'genreMovies',
    api.movies.getGroupedByGenre
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

export async function getServerSideProps(): Promise<{ props: MainMovies }> {
  const { data: movies } = await api.movies.getMain()

  return {
    props: movies,
  }
}
