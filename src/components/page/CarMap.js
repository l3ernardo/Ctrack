import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
 
class CarMap extends Component {

  state = {
    lat:null,
    lng:null
  }

  componentDidMount() {

    let latitude = this.props.content.lat;
    let longitude = this.props.content.lng;

    this.setState({
      lat:latitude,
      lng:longitude
    })
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
        zoom={5}>
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

 */     