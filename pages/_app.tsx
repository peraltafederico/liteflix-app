/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ReactQueryConfigProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../globalStyle'
import Layout from '../components/commons/Layout/Layout'
import { AppContextProvider } from '../context/app'

const theme = {
  breakpoints: {
    mobile: '@media only screen and (min-width: 0px)',
    tablet: '@media only screen and (min-width: 735px)',
    desktop: '@media only screen and (min-width: 1024px)',
  },
}

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Liteflix</title>
          <style>
            {`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto+Slab:wght@700&display=swap');
                        font-family: 'Montserrat';`}
          </style>
        </Head>
        <ReactQueryConfigProvider
          config={{
            queries: {
              retry: false,
              refetchOnWindowFocus: false,
            },
          }}
        >
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <AppContextProvider>
              <Layout notification={true}>
                <Component {...pageProps} />
              </Layout>
            </AppContextProvider>
          </ThemeProvider>
        </ReactQueryConfigProvider>
      </>
    )
  }
}

export default MyApp
