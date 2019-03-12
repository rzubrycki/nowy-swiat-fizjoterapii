import React, { Component } from 'react'

import Address from '../Sidebar/Address/address'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

export default class extends Component {
  constructor() {
    super()
    this.state = {
      lat: '53.20336',
      lng: '23.35098',
      zoom: 15,
    }
  }

  render() {
    const initMarker = ref => {
      if (ref) {
        ref.leafletElement.openPopup()
      }
    }
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom} scrollWheelZoom={false}>
        <TileLayer

          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} ref={initMarker}>
          <Popup>
            <Address />
          </Popup>
        </Marker>
      </Map>
    )
  }
}
