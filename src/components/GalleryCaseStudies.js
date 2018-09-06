import React from 'react'
import Swiper from 'react-id-swiper/lib/custom'
// import 'react-id-swiper/src/styles/css/swiper.css'

import Image from './Image'

import './GalleryCaseStudies.css'

export default ({ galleryCaseStudies = [], alt = '' }) => {
  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }

  return (
    <div className="Gallery">
      <Swiper {...params}>
        {galleryCaseStudies.map((fields, index) => (
          <div key={`GalleryImage${index}`}>
            <Image
              key={fields.image + index}
              src={fields.image}
              alt={fields.title}
            />
          </div>
        ))}
      </Swiper>
    </div>
  )
}
