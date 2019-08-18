import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Image from '../components/Image'
import BackgroundImage from '../components/BackgroundImage'
import Services from '../components/Services'
import Gallery from '../components/Gallery'

import './about.scss'
import '../components/Services.scss'

// Export Template for use in CMS preview
export const AboutPageTemplate = ({
  header,
  aboutSection1,
  aboutSection2,
  aboutSection3,
  aboutSection4
  // gallery = []
}) => (
  <Fragment>
    <main className="AboutPage">
      <PageHeader title={header.title} backgroundImage={header.heroImage} />

      <section className="section thick about-section--1 relative">
        <BackgroundImage
          src="/images/uploads/about-background-image-1.jpg"
          alt="header image"
        />

        <div className="container relative">
          <h2>{aboutSection1.title}</h2>
          <p className="subtitle">{aboutSection1.content}</p>
        </div>
      </section>

      <section className="section thick about-section--2 relative">
        <div className="container">
          <ul>
            <li>
              <Image
                className="about-icon-image"
                src={aboutSection2.icon1Image}
                alt="mobile diagnostics"
              />
              <p className="service-title">{aboutSection2.icon1Title}</p>
              <p className="subtitle">{aboutSection2.icon1Subtitle}</p>
            </li>
            <li>
              <Image
                className="about-icon-image"
                src={aboutSection2.icon2Image}
                alt="simple fees"
              />
              <p className="service-title">{aboutSection2.icon2Title}</p>
              <p className="subtitle">{aboutSection2.icon2Subtitle}</p>
            </li>
            <li>
              <Image
                className="about-icon-image"
                src={aboutSection2.icon3Image}
                alt="quality service"
              />
              <p className="service-title">{aboutSection2.icon3Title}</p>
              <p className="subtitle">{aboutSection2.icon3Subtitle}</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section thick about-section--3 relative">
        <BackgroundImage
          src={aboutSection3.backgroundImage}
          alt="about background-image-2"
        />

        <div className="container relative">
          <h2>{aboutSection3.title}</h2>
          <p className="big-body">{aboutSection3.subtitle}</p>

          <div className="vet-container">
            <ul>
              <li>
                <Image
                  className="vet-image"
                  src={aboutSection3.vetImage1}
                  alt="vet staff"
                />
                <p className="service-title">{aboutSection3.vetName1}</p>
                <p className="subtitle">{aboutSection3.vetDescription1}</p>
              </li>
              <li>
                <Image
                  className="vet-image"
                  src={aboutSection3.vetImage2}
                  alt="vet staff"
                />
                <p className="service-title">{aboutSection3.vetName2}</p>
                <Content
                  className="subtitle"
                  source={aboutSection3.vetDescription2}
                />
                {/* <p className="subtitle">{aboutSection3.vetDescription2}</p> */}
              </li>

              {!!aboutSection3.vetName3 && (
                <li>
                  <Image
                    className="vet-image"
                    src={aboutSection3.vetImage3}
                    alt="vet staff"
                  />
                  <p className="service-title">{aboutSection3.vetName3}</p>
                  <Content
                    className="subtitle"
                    source={aboutSection3.vetDescription3}
                  />
                  {/* <p className="subtitle">{aboutSection3.vetDescription3}</p> */}
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>

      <section className="section thick about-section--4">
        <div className="relative services container">
          <h2>{aboutSection4.title}</h2>
          <div className="flex">
            <Services singleService={aboutSection4.singleService} />
          </div>
        </div>

        {/* {gallery.length && (
          <section className="Centre--Gallery">
            <div className="container taCenter">
              <Gallery gallery={gallery} />
            </div>
          </section>
        )} */}
      </section>
    </main>
  </Fragment>
)

const AboutPage = ({ data: { page } }) => (
  <AboutPageTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default AboutPage

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        header {
          heroImage {
            ...FluidImage
          }
          title
        }
        aboutSection1 {
          title
          content
        }
        aboutSection2 {
          icon1Image {
            ...FluidImage
          }
          icon1Title
          icon1Subtitle
          icon2Image {
            ...FluidImage
          }
          icon2Title
          icon2Subtitle
          icon3Image {
            ...FluidImage
          }
          icon3Title
          icon3Subtitle
        }
        aboutSection3 {
          backgroundImage {
            ...FluidImage
          }
          title
          subtitle
          vetImage1 {
            ...FluidImage
          }
          vetName1
          vetDescription1
          vetImage2 {
            ...FluidImage
          }
          vetName2
          vetDescription2
          vetImage3 {
            ...FluidImage
          }
          vetName3
          vetDescription3
        }
        aboutSection4 {
          title
          singleService {
            name
            defaultIcon {
              ...FluidImage
            }
            hoverIcon {
              ...FluidImage
            }
            link
          }
        }
        # gallery {
        #   image {
        #     ...FluidImage
        #   }
        #   title
        #   content
        # }
      }
    }
  }
`
