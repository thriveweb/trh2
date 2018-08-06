import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import PostSection from '../components/PostSection'
import PostCategoriesNav from '../components/PostCategoriesNav'

// Export Template for use in CMS preview
export const BlogIndexTemplate = ({
  title,
  subtitle,
  posts = [],
  postCategories = []
}) => (
  <Fragment>
    <main className="Blog">
      <PageHeader
        backgroundImage="/images/uploads/case-studies--header.jpg"
        title="Case Studies"
      />

      {!!postCategories.length && (
        <PostCategoriesNav categories={postCategories} />
      )}

      {!!posts.length && <PostSection posts={posts} />}
    </main>
  </Fragment>
)

// Export Default BlogIndex for front-end
const BlogIndex = ({ data }) => {
  const { page, posts } = data
  return (
    <BlogIndexTemplate
      title={page.frontmatter.title}
      subtitle={page.frontmatter.subtitle}
      featuredImage={page.frontmatter}
      // pull frontmatter to root of post
      posts={posts.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
    />
  )
}

export default BlogIndex

export const pageQuery = graphql`
  ## Query for BlogIndex data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query BlogIndex($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        template
        subtitle
      }
    }

    posts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage {
              ...FluidImage
            }
            categories {
              category
            }
          }
        }
      }
    }
  }
`
