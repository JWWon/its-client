import produce from 'immer';
import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ClinicInterface, getCityInfo, searchByAddress } from 'api/clinic';
import { provinceCity } from 'assets/constant/address';
import { Section, ShadowBox } from 'components/common';
import CheckDistrict from './CheckDistrict';
import * as s from './Search.styled';
import SearchBar from './SearchBar';

export interface District {
  selected: boolean;
  count?: number;
}

interface Props extends RouteComponentProps<any> {}

interface State {
  search: {
    type: 'keyword' | 'address';
    param: string;
    list: ClinicInterface[];
  } | null;
  provinces: {
    pointer: string; // Province Name
    list: { [province: string]: District };
  };
  cities: {
    pointer: string; // City Name
    list: { [city: string]: District };
  } | null;
}

class Search extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    let list: { [province: string]: District } = {};
    for (const key in provinceCity) {
      if (key) {
        list = { ...list, [key]: { selected: false } };
      }
    }
    const pointer: string = Object.keys(list)[0];
    list[pointer].selected = true;

    this.state = {
      provinces: { list, pointer },
      search: null,
      cities: null,
    };
  }

  public componentDidMount() {
    const { location } = this.props;
    if (location.search) {
      console.log('has query');
    }
    this.getCitiesFromAPI();
  }

  public getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    if (this.state.search !== prevState.search) {
      if (this.state.search) {
        const { type, param } = this.state.search;
        this.props.history.push(`/search?&${type}=${param}`);
      } else {
        this.props.history.push('/search');
      }
    }
    return null;
  }

  public render() {
    const { search, provinces, cities } = this.state;
    return (
      <>
        <SearchBar handleDismiss={this.handleDismiss} />
        <Section
          title={search ? '지역 목록' : '지역으로 검색하기'}
          subtitle={search ? null : '찾으시는 지역을 선택하세요.'}>
          <s.BoxWrapper>
            <ShadowBox>
              <CheckDistrict
                title="도 / 특별시"
                list={provinces.list}
                handleClick={this.handleClickProvince}
              />
            </ShadowBox>
            <ShadowBox>
              <CheckDistrict
                isCity
                title="시 / 군 / 구"
                list={cities && cities.list}
                handleClick={this.handleClickCity}
              />
            </ShadowBox>
          </s.BoxWrapper>
        </Section>
      </>
    );
  }

  private getCitiesFromAPI = async () => {
    const { provinces } = this.state;
    const updateCity = await getCityInfo(provinces.pointer);
    const citiesObj = { ...provinceCity[provinces.pointer], ...updateCity };

    let list: { [city: string]: District } = {};

    for (const key in citiesObj) {
      if (key) {
        list = { ...list, [key]: { selected: false, count: citiesObj[key] } };
      }
    }
    const pointer: string = Object.keys(list)[0];
    this.setState({ cities: { pointer, list } });
  };

  private getClinicsFromAPI = async () => {
    if (this.state.cities) {
      const province = this.state.provinces.pointer;
      const city = this.state.cities.pointer;
      const list = await searchByAddress({ province, city });
      await this.setState({
        search: { type: 'address', param: `${province}+${city}`, list },
      });
    }
  };

  private handleClickProvince = async (
    e: React.FormEvent<HTMLDivElement>,
    name: string
  ) => {
    e.preventDefault();
    await this.setState(state =>
      produce(state, (draft: State) => {
        const { list, pointer } = draft.provinces;
        list[pointer].selected = false;
        list[name].selected = true;
        draft.provinces.pointer = name;
      })
    );
    this.getCitiesFromAPI();
  };

  private handleClickCity = async (
    e: React.FormEvent<HTMLDivElement>,
    name: string
  ) => {
    e.preventDefault();
    await this.setState(state =>
      produce(state, (draft: State) => {
        if (draft.cities) {
          const { list, pointer } = draft.cities;
          list[pointer].selected = false;
          list[name].selected = true;
          draft.cities.pointer = name;
        }
      })
    );
    this.getClinicsFromAPI();
  };

  private handleDismiss = () => {
    const { location, history } = this.props;
    if (location.search) {
      this.setState(state =>
        produce(state, draft => {
          draft.search = null;
          if (draft.cities) {
            const { list, pointer } = draft.cities;
            list[pointer].selected = false;
          }
        })
      );
      history.push('/search');
    } else {
      history.push('/');
    }
  };
}

export default Search;
