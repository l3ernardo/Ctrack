import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
 
class CarMap extends Component {

  state = {
    lat:this.props.content.lat,
    lng:this.props.content.lng
  }

   render() {

    const style = {
      width: '80%',
      height: '80%'
    }
    return (
      <div>
      <Map       
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: this.state.lat,
          lng: this.state.lng
        }}
        zoom={15}>
      </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBtZZPT22b6tT6RgAKaAuPJtgVmfeXnnEo")
})(CarMap)


/*

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

      <Map       
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: 38.6206,
          lng: -9.1954
        }}
        zoom={15}>
      </Map>


 */     