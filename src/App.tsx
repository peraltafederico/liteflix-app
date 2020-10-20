import React from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import Layout from './components/Layout/Layout'

const theme = {
  breakpoints: {
    mobile: '@media only screen and (min-width: 0px)',
    tablet: '@media only screen and (min-width: 735px)',
    desktop: '@media only screen and (min-width: 1024px)',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout notification>hola :)</Layout>
    </ThemeProvider>
  )
}

export default App
