import React from 'react'
import Swiper from 'react-id-swiper/lib/custom'
import 'react-id-swiper/src/styles/css/swiper.css'

import Image from './Image'

import './Gallery.css'

export default ({ images = [], alt = '' }) => {
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
        {images.map((image, index) => (
          <div key={`GalleryImage${index}`}>
            <Image key={image + index} src={image} alt={alt} />
            <p className="service-title">This Title</p>
            <p className="subtitle">
              Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              otam rem aperiam, eaque ipsa quae ab illo inventore.
            </p>
          </div>
        ))}
      </Swiper>
    </div>
  )
}
