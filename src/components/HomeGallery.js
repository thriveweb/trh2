import React from 'react'
import Swiper from 'react-id-swiper/lib/custom'
import 'react-id-swiper/src/styles/css/swiper.css'

import Image from './Image'

import './HomeGallery.css'

export default ({ homeGallery = [], alt = '' }) => {
  const params = {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }

  return (
    <div className="Gallery">
      <Swiper {...params}>
        {homeGallery.map((fields, index) => (
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
