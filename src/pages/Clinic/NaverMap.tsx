import React, { Component } from 'react';
import styled from 'theme';

interface State {
  map: any;
}

const MAP_ID = 'map';
const { maps } = window.naver;
const Map = styled.div.attrs({ id: MAP_ID })`
  width: 100%;
  height: ${({ theme }) => (theme.mobile ? '16rem' : '100%')};
  margin-top: 1.6rem;
`;

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
