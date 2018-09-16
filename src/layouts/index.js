import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import 'modern-normalize/modern-normalize.css'

import './globalStyles.css'
import Meta from '../components/Meta'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import GithubCorner from '../components/GithubCorner'

export default ({ children, data }) => {
  const { siteTitle, siteUrl, socialMediaCard, headerScripts } =
    data.settingsYaml || {}
  return (
    <Fragment>
      <Helmet defaultTitle={siteTitle} titleTemplate={`%s | ${siteTitle}`}>
        <link rel="stylesheet" href="https://use.typekit.net/ydi7gbe.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Dosis"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.1.1/css/all.css"
          integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ"
          crossorigin="anonymous"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/css/swiper.min.css"
        />
      </Helmet>

      <Meta
        headerScripts={headerScripts}
        absoluteImageUrl={
          socialMediaCard &&
          socialMediaCard.image &&
          siteUrl + socialMediaCard.image
        }
      />

      <GithubCorner url="https://github.com/thriveweb/whitesmoke" />

      <Nav />

      <Fragment>{children()}</Fragment>

      <Footer />
    </Fragment>
  )
}

export const query = graphql`
  query IndexLayoutQuery {
    settingsYaml {
      siteTitle
      siteDescription
      headerScripts
      socialMediaCard {
        image
      }
    }
  }
`
