import React from 'react'
import Link from 'gatsby-link'


import Image from '../components/Image'
import BackgroundImage from '../components/BackgroundImage'

import './Cta.scss'

export default props => (
  <section className="cta relative">
    <BackgroundImage
      src="/images/uploads/background-image-3.jpg"
      alt="background-image 3"
    />

    <div className="relative">
      <div className="inner-text">
        <h2>{props.title}</h2>
        <p className="big-body">{props.subtitle}</p>
        <div className="button-container">
          <Link className="Button" to="/contact">
            Contact Us
          </Link>
          <Link className="Button Button--inverted" to="/contact">
            Online Examination
          </Link>
        </div>
      </div>
      <div className="clear" />
    </div>
  </section>
)
