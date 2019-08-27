import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import EnquiryFormSimpleAjax from '../components/EnquiryFormSimpleAjax'
import Image from '../components/Image'
import GoogleMap from '../components/GoogleMap'

import './contact.scss'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  header,
  contactSection1,
  contactSection2
}) => (
  <Fragment>
    <main className="Contact">
      <PageHeader
        title={header.title}
        backgroundImage={header.heroImage}
        alt={header.title}
      />

      <section className="section contact-section--1">
        <div className="container flex">
          <div className="right-column">
            <h2>{contactSection1.title}</h2>
            <p className="big-body">{contactSection1.subtitle}</p>

            <ul>
              <li>
                <Image
                  className="quote-mark"
                  src="/images/uploads/contact-icon.svg"
                  alt="phone icon"
                />

                <a
                  className="service-title"
                  href={`tel:${contactSection1.phone}`}
                >
                  {contactSection1.phone}
                </a>
              </li>
              <li>
                <Image
                  className="quote-mark"
                  src="/images/uploads/email_icon.svg"
                  alt="email icon"
                />

                <a
                  className="service-title"
                  href={`mailto:${contactSection1.email}`}
                >
                  {contactSection1.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="left-column">
            <EnquiryFormSimpleAjax />
          </div>
        </div>

        <section className="contact-section--2">
          <div className="white-sqaure">
            <h4>Find us here</h4>
            <p>{contactSection2.address}</p>
            <h4>Open hours</h4>
            <p>{contactSection2.openingHours}</p>
            <h4>Parking</h4>
            <p>{contactSection2.parkingInfo}</p>
          </div>
          {/* <GoogleMap /> */}
          <Image src="/images/map.png" alt="map" />
        </section>
      </section>
    </main>
  </Fragment>
)

const ContactPage = ({ data: { page } }) => (
  <ContactPageTemplate {...page.frontmatter} body={page.html} />
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        header {
          title
          heroImage {
            ...FluidImage
          }
        }
        contactSection1 {
          title
          subtitle
          phone
          email
        }
        contactSection2 {
          address
          openingHours
          parkingInfo
        }
      }
    }
  }
`
