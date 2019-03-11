import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    return (
      <div>
      <Map google={this.props.google} zoom={14}>

        <Marker
            name={'Current location'}
            position={{lat: -22.970722, lng: -43.182365}} />
        <Marker />
        
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>

      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBtZZPT22b6tT6RgAKaAuPJtgVmfeXnnEo")
})(Map)