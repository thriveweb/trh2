import React from 'react'
import Swiper from 'react-id-swiper/lib/custom'
// import 'react-id-swiper/src/styles/css/swiper.css'
import Link from 'gatsby-link'

import Image from './Image'
import BackgroundImage from '../components/BackgroundImage'

import './HomeGallery.css'

export default ({ homeGallery = [], alt = '' }) => {
  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }

  return (
    <div className="Gallery-Home">
      <Swiper {...params}>
        {homeGallery.map((fields, index) => (
          <div key={`GalleryImage${index}`}>
            <div className="Gallery-Card relative">
              <BackgroundImage
                src="/images/uploads/background-image-5.svg"
                alt="header image"
              />
              <Link to={fields.link}>
                <div className="Gallery-Img">
                  <div className="Gallery-Img--Container relative">
                    <BackgroundImage
                      src={fields.imageBefore}
                      alt={fields.title}
                      key={fields.imageBefore + index}
                    />
                  </div>

                  <div className="Gallery-Img--Container relative">
                    <BackgroundImage
                      src={fields.imageAfter}
                      alt={fields.title}
                      key={fields.imageAfter + index}
                    />
                  </div>
                </div>
              </Link>

              <h4>{fields.title}</h4>

              <p>{fields.subtitle}</p>
            </div>
          </div>
        ))}
      </Swiper>
    </div>
  )
}
