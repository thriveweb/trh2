import React from 'react'
import Swiper from 'react-id-swiper/lib/custom'
// import 'react-id-swiper/src/styles/css/swiper.css'

import Image from './Image'

import './Gallery.css'

export default ({ gallery = [], alt = '' }) => {
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
        {gallery.map((fields, index) => (
          <div key={`GalleryImage${index}`}>
            <Image
              key={fields.image + index}
              src={fields.image}
              alt={fields.title}
            />
            <p className="service-title">{fields.title}</p>
            <p className="subtitle">{fields.content}</p>
          </div>
        ))}
      </Swiper>
    </div>
  )
}
