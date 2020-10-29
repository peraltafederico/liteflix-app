import React, { ReactElement } from 'react'
import HeroImage from '../components/Home/HeroImage/HeroImage'
import UpcomingMovies from '../components/Home/UpcomingMovies/UpcomingMovies'
import PopularMovies from '../components/Home/PopularMovies/PopularMovies'
import api from '../services'

const upcomingMovies = [
  {
    imageUrl: '/images/peaky-blinders.jpg',
  },
  {
    imageUrl: '/images/peaky-blinders.jpg',
  },
  {
    imageUrl: '/images/peaky-blinders.jpg',
  },
  {
    imageUrl: '/images/peaky-blinders.jpg',
  },
]

const popularMovies = [
  {
    imageUrl: '/images/borrar_large.png',
  },
  {
    imageUrl: '/images/borrar_large.png',
  },
  {
    imageUrl: '/images/borrar_large.png',
  },
  {
    imageUrl: '/images/borrar_large.png',
  },
]

export default function Home({featured, upcoming, popular}: any): ReactElement {
  return (
    <>
      <HeroImage title={featured.title} overview={featured.overview} imgUrl={featured.imgUrl}/>
      <UpcomingMovies movies={upcoming} />
      <PopularMovies movies={popular} />
    </>
  )
}

Home.getInitialProps = async (ctx) => {
   const [{data: mainMovies}] = await Promise.all([
    api.movies.getMainMovies(),
  ])


  return {
    ...mainMovies
  }
}
