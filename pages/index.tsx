import React, { ReactElement } from 'react'
import { useQuery } from 'react-query'
import HeroImage from '../components/HomePage/HeroImage/HeroImage'
import MovieCategory from '../components/HomePage/MovieCategory/MovieCategory'
import PopularMovies from '../components/HomePage/PopularMovies/PopularMovies'
import api from '../services'
import GenreMovies from '../components/HomePage/GenreMovies/GenreMovies'
import HomeSpinner from '../components/HomePage/HomeSpinner/HomeSpinner'

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
      <div
        style={{
          marginTop: -60,
        }}
      >
        <MovieCategory
          movies={upcoming || []}
          size="small"
          title="Próximamente"
        />
      </div>
      <MovieCategory
        movies={popular || []}
        size="large"
        title="POPULARES DE LITEFLIX"
      />
      {isFetching ? (
        <HomeSpinner />
      ) : (
        (response?.data || groupedByGenre).map((group: any) => (
          <MovieCategory
            size="small"
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
