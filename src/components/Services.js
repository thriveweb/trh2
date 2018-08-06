import React, { Component } from 'react'
import Link from 'gatsby-link'

import Image from '../components/Image'

import './Services.scss'

class Services extends Component {
  render() {
    const { singleService = [] } = this.props

    return (
      <div className="flex">
        {singleService.map((list, index) => {
          return (
            <Link to={list.link}>
              <div className="square" key={list.name}>
                <Image className="icon" src={list.defaultIcon} alt="icon 1" />
                <Image
                  className="icon-hover"
                  src={list.hoverIcon}
                  alt="icon 1 hover"
                />
                <p className="service-title">{list.name}</p>
              </div>
            </Link>
          )
        })}
      </div>
    )
  }
}

export default Services
