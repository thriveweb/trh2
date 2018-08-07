import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Image from '../components/Image'
import Services from '../components/Services'
import Cta from '../components/Cta'
import HomeGallery from '../components/HomeGallery'

import '../components/Services.scss'
import './index.scss'

// Export Template for use in CMS preview
export const HomePageTemplate = ({
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
  posts,
  gallery = []
}) => (
  <Fragment>
    <main className="Home">
      <section className="section--1 relative">
        <Image background src={section1.heroImage} alt={section1.title} />

        <div className="relative container-banner">
          <div className="inner">
            <h1>{section1.title}</h1>
            <p className="big-body">{section1.subtitle}</p>

            <Link className="Button" to="/Conact">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section--2  section thin">
        <div className="container">
          <h4>{section2.content}</h4>
        </div>
      </section>

      <section className="section--3  section relative">
        <Image
          background
          src={section3.backgroundImage}
          alt="background-image 2"
        />

        <div className="relative services container">
          <h2>{section3.title}</h2>
          <div className="flex">
            <Services singleService={section3.singleService} />
          </div>
        </div>
      </section>

      <Cta title={section4.title} subtitle={section4.subtitle} />

      <section className="section--5 section thick relative">
        <Image
          background
          src={section5.backgroundImage}
          alt="background-image 4"
        />

        <div className="relative container">
          <div className="columnContainer">
            <div className="left">
              <h2>{section5.title}</h2>
              <Content src={section5.content} />

              <Link className="Button Button--inverted" to="/contact">
                More About Us
              </Link>
            </div>

            <div className="right">
              <Image
                className="quote-mark"
                src="/images/uploads/quote-mark.svg"
                alt="quote mark"
              />

              <h3>{section5.quote}</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section--6 section relative">
        <div className="container">
          <h2>{section6.title}</h2>

          {gallery.length && (
            <section className="Centre--Gallery">
              <div className="container taCenter">
                <HomeGallery homeGallery={gallery} />
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  </Fragment>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page, posts } }) => (
  <HomePageTemplate
    {...page}
    {...page.frontmatter}
    body={page.html}
    posts={posts.edges.map(post => ({
      ...post.node,
      ...post.node.frontmatter,
      ...post.node.fields
    }))}
  />
)

export default HomePage

export const pageQuery = graphql`
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        section1 {
          heroImage {
            ...FluidImage
          }
          title
          subtitle
        }
        section2 {
          content
        }
        section3 {
          backgroundImage {
            ...FluidImage
          }
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
        section4 {
          title
          subtitle
        }
        section5 {
          backgroundImage {
            ...FluidImage
          }
          title
          content
          quote
        }
        section6 {
          title
        }
        gallery {
          imageBefore {
            ...FluidImage
          }
          title
          imageAfter {
            ...FluidImage
          }
          subtitle
          link
        }
      }
    }

    posts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            featuredImage {
              ...FluidImage
            }
            categories {
              category
            }
            gallery {
              image {
                ...FluidImage
              }
              title
              content
            }
          }
        }
      }
    }
  }
`
