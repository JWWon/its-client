import React, { Component } from 'react';
import styled from 'theme';

declare global {
  interface Window {
    naver: { maps: any };
  }
}

const MAP_ID = 'map';
const { maps } = window.naver;
const Map = styled.div.attrs({ id: MAP_ID })`
  width: 100%;
  height: 100%;
`;

interface State {
  map: any;
}

class NaverMap extends Component<{}, State> {
  public state: State = { map: null };

  public componentDidMount() {
    const mapOption = {
      zoom: 10,
    };
    const map = new maps.Map(MAP_ID, mapOption);
    this.setState({ map });
  }

  public render() {
    return <Map />;
  }
}

export default NaverMap;
