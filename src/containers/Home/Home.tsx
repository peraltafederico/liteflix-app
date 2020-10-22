import React, { ReactElement } from 'react'
import Layout from '../../components/Layout/Layout'
import UpcomingMovies from './UpcomingMovies/UpcomingMovies'
import HeroImage from './HeroImage/HeroImage'
import PopularMovies from './PopularMovies/PopularMovies'

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
    <Layout>
      <HeroImage />
      <UpcomingMovies movies={upcomingMovies} />
      <PopularMovies movies={popularMovies} />
    </Layout>
  )
}
