import React, { Component } from 'react'
import Helmet from 'react-helmet'
import _debounce from 'lodash/debounce'

import './GoogleMap.css'

export default class GoogleMap extends Component {
  static defaultProps = {
    apiKey: 'AIzaSyD-7fHzppu6AIoPFGO6hjFAuw40yyscbEo',
    lat: -28.078287,
    lng: 153.444221,
    zoom: 15,
    disableDefaultUI: false,
    icon: '',
    styles: {}
  }

  mapElement = null
  map = null

  componentDidMount() {
    window.initMap = this.initMap
    if (window.google) this.initMap()
    this.addListeners()
  }

  addListeners = () => {
    if (!this.map) return false
    window.addEventListener('resize', _debounce(this.setMapCenter), 100)
  }

  setMapCenter = () => {
    if (!this.map) return false
    const { lat, lng } = this.props
    const center = { lat, lng }
    this.map.setCenter(center)
    this.panMapOffset()
  }

  panMapOffset = () => {
    if (!this.map || window.innerWidth <= 1000) return false
    this.map.panBy(window.innerWidth / 5, 0)
  }

  initMap = () => {
    const google = window.google
    const { lat, lng, zoom, disableDefaultUI } = this.props
    const center = { lat, lng }
    const map = new google.maps.Map(this.mapElement, {
      zoom,
      disableDefaultUI,
      styles: [
        {
          elementType: 'geometry',
          stylers: [
            {
              color: '#212121'
            }
          ]
        },
        {
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#757575'
            }
          ]
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#212121'
            }
          ]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry',
          stylers: [
            {
              color: '#757575'
            }
          ]
        },
        {
          featureType: 'administrative.country',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#9e9e9e'
            }
          ]
        },
        {
          featureType: 'administrative.land_parcel',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#bdbdbd'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#757575'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            {
              color: '#181818'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#616161'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#1b1b1b'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#2c2c2c'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#8a8a8a'
            }
          ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [
            {
              color: '#373737'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [
            {
              color: '#3c3c3c'
            }
          ]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'geometry',
          stylers: [
            {
              color: '#4e4e4e'
            }
          ]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#616161'
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#757575'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#000000'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#3d3d3d'
            }
          ]
        }
      ]
    })
    // pan offset
    const icon = this.props.icon
      ? {
          url: this.props.icon
        }
      : ''
    this.marker = new google.maps.Marker({
      position: center,
      icon,
      map
    })

    this.map = map
    this.setMapCenter()
    this.addListeners()
  }

  render() {
    return (
      <div className="GoogleMap--Wrap">
        <Helmet>
          <script
            async
            defer
            src={`https://maps.googleapis.com/maps/api/js?key=${
              this.props.apiKey
            }&callback=initMap`}
          />
        </Helmet>
        <div
          className="GoogleMap"
          ref={el => {
            this.mapElement = el
          }}
        />
      </div>
    )
  }
}
