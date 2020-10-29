import React, { ReactElement } from 'react'
import HeroImage from '../components/Home/HeroImage/HeroImage'
import UpcomingMovies from '../components/Home/UpcomingMovies/UpcomingMovies'
import PopularMovies from '../components/Home/PopularMovies/PopularMovies'

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

export default function Home(): ReactElement {
  return (
    <>
      <HeroImage />
      <UpcomingMovies movies={upcomingMovies} />
      <PopularMovies movies={popularMovies} />
    </>
  )
}
