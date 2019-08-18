import React from 'react'
import Link from 'gatsby-link'

import Image from '../components/Image'
import Content from '../components/Content'

import './ServiceIntro.scss'

export default props => (
  <div className="relative service-intro">
    <div className="relative container">
      <div className="service-single">
        <h2>{props.title}</h2>

        <Image className="icon" src={props.icon} alt="vaccination icon" />

        <p className="subtitle">
          <Content source={props.subtitle} />
        </p>
      </div>
    </div>
  </div>
)
