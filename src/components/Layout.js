import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import 'modern-normalize/modern-normalize.css'

import Meta from './Meta'
import Nav from './Nav'
import Footer from './Footer'
import './globalStyles.css'

export default ({ children }) => (
    <StaticQuery
        render={data => {
            const { siteTitle, siteUrl, socialMediaCard, headerScripts } =
            data.settingsYaml || {}
            return (
                <Fragment>
                    <Helmet defaultTitle={siteTitle} titleTemplate={`${siteTitle} | %s`}>
                        <link rel="stylesheet" href="https://use.typekit.net/ydi7gbe.css" />
                        <link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet" />
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous" />

                    </Helmet>

                    <Meta
                        headerScripts={headerScripts}
                        absoluteImageUrl={
                            socialMediaCard &&
                            socialMediaCard.image &&
                            siteUrl + socialMediaCard.image
                        }
                        twitterCreatorAccount={
                            socialMediaCard && socialMediaCard.twitterCreatorAccount
                        }
                        twitterSiteAccount={
                            socialMediaCard && socialMediaCard.twitterSiteAccount
                        }
                    />

                    <Nav />

                    {children}

                    <Footer />
                </Fragment>
            )
        }}
        query={graphql`
            query IndexLayoutQuery {
                settingsYaml {
                    siteTitle
                    siteDescription
                    headerScripts
                    socialMediaCard {
                        image
                        twitterCreatorAccount
                        twitterSiteAccount
                    }
                }
            }
            `}
        />
    )
