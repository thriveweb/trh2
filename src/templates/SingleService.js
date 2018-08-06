import React, { Fragment } from 'react'
import _get from 'lodash/get'
import Link from 'gatsby-link'

import PageHeader from '../components/PageHeader'
import BackgroundImage from '../components/BackgroundImage'
import ServiceIntro from '../components/ServiceIntro'
import Cta from '../components/Cta'
import AccordionRepeater from '../components/Accordion'

import './SingleService.scss'

// Export Template for use in CMS preview
export const SingleServiceTemplate = ({ title, serviceIntro, accordion }) => (
  <Fragment>
    <main className="ServicesPage">
      <PageHeader
        title={title}
        backgroundImage="/images/uploads/service-header--image.jpg"
      />

      <section className="service-section--1 section relative">
        <BackgroundImage
          src="/images/uploads/about-background-image-2.svg"
          alt="service background-image-2"
        />

        <ServiceIntro
          title={serviceIntro.title}
          subtitle={serviceIntro.subtitle}
          icon={serviceIntro.icon}
        />

        <AccordionRepeater
          accordion={accordion}
        />
      </section>

      <Cta
        title="For all Your Horse Needs Please Give Us a Call"
        subtitle="We are a mobile diagnostics servicing from Mudgeeraba to Beaudesert on a basic call out fee."
      />
    </main>
  </Fragment>
)

// Export Default HomePage for front-end
const SingleService = ({ data: { page } }) => (
  <SingleServiceTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default SingleService

export const pageQuery = graphql`
  query SingleService($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        serviceIntro {
          title
          subtitle
          icon {
            ...FluidImage
          }
        }
        accordion {
          title
          content
          link
        }
      }
    }
  }
`
