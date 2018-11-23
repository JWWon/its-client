import React, { Component } from 'react';
import styled, { selectByDevice } from 'theme';

interface Props {
  address: string;
}

const { daum } = window;
const Map = styled.div`
  width: 100%;
  height: ${selectByDevice({ m: '20rem', d: '100%' })};
  ${selectByDevice({ m: 'margin-top: 1.6rem', d: '' })};
`;

class DamuMap extends Component<Props> {
  public componentDidMount() {
    const container = document.getElementById('map');
    const defaultCoords = new daum.maps.LatLng(37.526888, 127.050566); // itso-o HQ
    const options = { center: defaultCoords, level: 3 };

    const map = new daum.maps.Map(container, options);
    const marker = new daum.maps.Marker({ position: defaultCoords, map });

    const geocoder = new daum.maps.services.Geocoder();
    geocoder.addressSearch(
      this.props.address,
      async (results: any[], status: any) => {
        if (status === daum.maps.services.Status.OK) {
          const result: { x: number; y: number } = results[0];
          const coords = new daum.maps.LatLng(result.y, result.x);

          map.setCenter(coords);
          marker.setPosition(coords);
        }
      }
    );
  }

  public render() {
    return <Map id="map" />;
  }
}

export default DamuMap;
