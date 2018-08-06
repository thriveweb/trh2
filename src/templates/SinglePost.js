import React, { Fragment } from 'react'
import _get from 'lodash/get'
import Link from 'gatsby-link'
import { ChevronLeft } from 'react-feather'

import BackgroundImage from '../components/BackgroundImage'
import PageHeader from '../components/PageHeader'
import Cta from '../components/Cta'
import AccordionRepeater from '../components/Accordion'
import GalleryCaseStudies from '../components/GalleryCaseStudies'

import './SinglePost.css'

export const SinglePostTemplate = ({
  title,
  date,
  dateFormatted,
  body,
  nextPostURL,
  prevPostURL,
  accordion,
  categories = [],
  gallery = []
}) => (
  <Fragment>
    <PageHeader
      backgroundImage="/images/uploads/singlepost-banner.jpg"
      title={title}
    />

    <article
      className="SinglePost"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <div className="SinglePost--Content relative">
        {/* <div className="SinglePost--Meta">
            {!!categories.length &&
              categories.map(obj => (
                <span key={obj.category} className="SinglePost--Meta--Category">
                  {obj.category}
                </span>
              ))}
            {date && (
              <time
                className="SinglePost--Meta--Date"
                itemProp="dateCreated pubdate datePublished"
                date={date}
              >
                {dateFormatted}
              </time>
            )}
          </div> */}

        <section className="section thin case-study--intro columnContainer">
          <p className="subtitle">
            Intro to the case study porta nibh vestibulum malesuada mattis.
            Curabitur neque enim, dignissim eget dapibus a, cursus id ex. Nunc
            eu laoreet magna, non sodales ex. <br />
            <br />
            Etiam eu sem lorem. In ac porta purus, in sagittis dui. Sed pretium,
            felis in bibendum suscipit, ante ligula commodo nisl, non posuere
            nulla ipsum nec libero. Phasellus porta volutpat tortor, at
            bibendum. Laudantium, totam rem aperiam.
          </p>
        </section>

        <section className="section relative case-study--accordion">
          <BackgroundImage
            src="/images/uploads/about-background-image-2.svg"
            alt="background image"
          />

          <div className=" container">
            <AccordionRepeater accordion={accordion} />
          </div>
        </section>

        <section className="section case-study--slider">
          <div className="container">
            {gallery.length && (
              <section className="Centre--Gallery">
                <div className="container taCenter">
                  <GalleryCaseStudies galleryCaseStudies={gallery} />
                </div>
              </section>
            )}
          </div>
        </section>

        <Cta
          title="For all Your Horse Needs Please Give Us a Call"
          subtitle="We are a mobile diagnostics servicing from Mudgeeraba to Beaudesert on a basic call out fee."
        />
      </div>
    </article>
  </Fragment>
)

// Export Default SinglePost for front-end
const SinglePost = ({ data, pageContext }) => {
  const { post } = data
  const { previous, next } = pageContext
  return (
    <SinglePostTemplate
      {...post}
      {...post.frontmatter}
      body={post.html}
      nextPostURL={_get(next, 'fields.slug')}
      prevPostURL={_get(previous, 'fields.slug')}
    />
  )
}

export default SinglePost

export const pageQuery = graphql`
  ## Query for SinglePost data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query SinglePost($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        template
        subtitle
        date
        dateFormatted: date(formatString: "MMMM Do, YYYY")
        accordion {
          title
          content
          link
        }
        gallery {
          image {
            ...FluidImage
          }
        }
      }
    }
  }
`
