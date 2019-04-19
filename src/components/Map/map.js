import React, { Component } from 'react'

import Address from '../Sidebar/Address/address'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

let leaflet
if (typeof window !== 'undefined') {
  leaflet = require('leaflet')
}

export default class extends Component {
  constructor() {
    super()
    this.state = {
      lat: '53.20336',
      lng: '23.35098',
      zoom: 15,
      showLogo: true
    }
  }

  render() {
    const initMarker = ref => {
      if (ref) {
        ref.leafletElement.openPopup()
      }
    }
    const position = [this.state.lat, this.state.lng]
    if (typeof window !== 'undefined') {
      const customMarker = leaflet.icon({
        iconUrl: require('../../assets/images/marker.svg'),
      })
      return (
        <div className="mapWrapper">
          <Map center={position} zoom={this.state.zoom} scrollWheelZoom={false}>
            <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
            <Marker position={position} ref={initMarker} icon={customMarker}>
              <Popup>
                <Address logo={this.state.showLogo} />
              </Popup>
            </Marker>
          </Map>
        </div>
      )
    }
    return null
  }
}
