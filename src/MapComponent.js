import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'react-google-maps';
import {GoogleApiWrapper} from 'react-google-maps';

export class MapContainer extends Component {
render() {
    return (
      <Map
      google={this.props.google}
      zoom={14}
      initialCenter={{
            lat: 45.2778604,
            lng: 19.7784523
          }}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (AIzaSyDA0uNWg5T_T4V1_6pBX5k_5kHIhA41dAY)
})(MapContainer)
