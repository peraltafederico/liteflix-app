import React from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import Home from './containers/Home/Home'

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
      <Home />
    </ThemeProvider>
  )
}

export default App
