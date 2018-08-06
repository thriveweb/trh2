import React from 'react'
import Link from 'gatsby-link'
import _map from 'lodash/map'

import BackgroundImage from './BackgroundImage'

import './PostCard.css'

const PostCard = ({
  featuredImage,
  title,
  excerpt,
  slug,
  categories = [],
  className = '',
  ...props
}) => (
  <Link to={slug} className={`PostCard ${className}`}>
    <div className="PostCard--overlay">
      {title && <h4 className="PostCard--Title">{title}</h4>}
      {excerpt && <div className="PostCard--Excerpt">{excerpt}</div>}

      <Link className="Button" to={slug}>
        View Case
      </Link>
    </div>
    {featuredImage && (
      <div className="PostCard--Image relative">
        <BackgroundImage src={featuredImage} alt={title} />
      </div>
    )}
    {/* {category && (
      <div className='PostCard--Category'>{category}</div>
    )} */}
  </Link>
)

export default PostCard
