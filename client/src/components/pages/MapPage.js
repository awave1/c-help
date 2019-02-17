import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const MapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={15} defaultCenter={props.location}>
      {props.isMarkerShown && (
        <Marker position={props.markerLocation || props.location} />
      )}
    </GoogleMap>
  ))
);

class MapPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0.0,
      long: 0.0,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
  }

  render() {
    return (
      <MapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyChsroDXsM8Sh902kiSzr-aI7KnJ-54sqA&callback=initMap"
        loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
        location={{ lat: this.state.lat, lng: this.state.long }}
        isMarkerShown
        containerElement={
          <div
            style={{
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          />
        }
        mapElement={
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
        }
      />
    );
  }
}

export default MapPage;
