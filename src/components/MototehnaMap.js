import React, { Component } from 'react';

import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

import 'css/AboutUs.css';
import { MototehnaGoogleMapRoutes } from 'config/constants';

class MototehnaMap extends Component {
  static defaultProps = { ...MototehnaGoogleMapRoutes, defaultZoom: 15 };
  render() {
    const { lat, lng, defaultZoom } = this.props;
    return (
      <GoogleMap defaultZoom={defaultZoom} defaultCenter={{ lat, lng }}>
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    );
  }
}

export default compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyB8TVoWXCQfjhFwfn6MLaHAzXu4Uq5ukrk&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(MototehnaMap);
