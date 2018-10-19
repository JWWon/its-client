import produce from 'immer';
import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import {
  ClinicInterface,
  getCityInfo,
  searchByAddress,
  searchByKeyword,
} from 'api/clinic';
import { Section, ShadowBox } from 'components/common';
import { provinceCity } from 'lib/constant/address';
import { getSearchFromURL } from 'src/lib/functions/url';
import CheckDistrict from './CheckDistrict';
import * as s from './Search.styled';
import SearchBar from './SearchBar';

interface List {
  [name: string]: { count?: number };
}

export interface District {
  pointer: string | null; // DISTRICT NAME
  list: List;
}

interface Props extends RouteComponentProps<any> {}

interface State {
  search: {
    type: 'keyword' | 'address';
    param: string;
    list: ClinicInterface[];
  } | null;
  provinces: District;
  cities: District | null;
}

class Search extends PureComponent<Props, State> {
  private unlisten: (location?: Location) => void;

  constructor(props: Props) {
    super(props);
    let list: List = {};
    for (const key in provinceCity) {
      if (key) list = { ...list, [key]: {} };
    }
    this.state = {
      provinces: { list, pointer: null },
      search: null,
      cities: null,
    };
  }

  public componentDidMount() {
    const { history, location } = this.props;
    this.handleSearchByURL(location);
    this.unlisten = history.listen(this.handleSearchByURL);
  }

  public componentWillUnmount() {
    this.unlisten();
  }

  public render() {
    const { search, provinces, cities } = this.state;
    let option = {};
    if (search && search.type === 'address') {
      option = { ...option, handleDismiss: this.handleDismiss };
    }

    return (
      <>
        {(!search || search.type === 'keyword') && (
          <SearchBar
            handleSumbitKeyword={this.handleSumbitKeyword}
            handleDismiss={this.handleDismiss}
          />
        )}
        {(!search || search.type === 'address') && (
          <Section
            title={search ? '지역 목록' : '지역으로 검색하기'}
            subtitle={search ? null : '찾으시는 지역을 선택하세요.'}
            {...option}>
            <s.BoxWrapper>
              <ShadowBox>
                <CheckDistrict
                  title="도 / 특별시"
                  district={provinces}
                  handleClick={this.handleClickProvince}
                />
              </ShadowBox>
              <ShadowBox>
                <CheckDistrict
                  isCity
                  title="시 / 군 / 구"
                  district={cities && cities}
                  handleClick={this.handleClickCity}
                />
              </ShadowBox>
            </s.BoxWrapper>
          </Section>
        )}
        {search && (
          <Section title={`'${search.param}' 검색 결과`}>
            <div>결과값</div>
          </Section>
        )}
      </>
    );
  }

  // *** NETWORK
  private getCitiesFromAPI = async (province: string) => {
    const updateCity = await getCityInfo(province);
    const citiesObj = { ...provinceCity[province], ...updateCity };
    let list: List = {};

    for (const key in citiesObj) {
      if (key) list = { ...list, [key]: { count: citiesObj[key] } };
    }

    this.setState({ cities: { list, pointer: null } });
  };

  private getClinicsFromAPI = async (query: any) => {
    const { type } = query;
    let list;
    let param;
    switch (type) {
      case 'keyword':
        const keyword = query.q;
        list = await searchByKeyword({ keyword });
        param = keyword;
        break;
      case 'address':
        const { province, city } = query;
        list = await searchByAddress({ province, city });
        param = `${province} ${city}`;
        break;
    }
    await this.setState({
      search: { type, param, list },
    });
  };

  // *** HANDLE EVENT
  private handleSearchByURL = async (location: any) => {
    if (location.search) {
      const query = getSearchFromURL(location);
      if (query.type === 'address' && !this.state.provinces.pointer) {
        // Handle componentDidMount
        await this.getCitiesFromAPI(query.province);
        await this.setState(state =>
          produce(state, draft => {
            const { provinces, cities } = draft;
            provinces.pointer = query.province;
            if (cities) cities.pointer = query.city;
          })
        );
      }
      this.getClinicsFromAPI(query);
    } else {
      await this.setState(state =>
        produce(state, draft => {
          const { provinces, cities } = draft;
          draft.search = null;
          if (!provinces.pointer) {
            // Handle componentDidMount
            provinces.pointer = Object.keys(provinces.list)[0];
            this.getCitiesFromAPI(provinces.pointer);
          } else if (cities) {
            cities.pointer = null;
          }
        })
      );
    }
  };

  private handleSumbitKeyword = async (
    e: React.FormEvent<HTMLFormElement>,
    keyword: string
  ) => {
    e.preventDefault();
    // UPDATE URL
    this.props.history.push(`/search?type=keyword&q=${keyword}`);
  };

  private handleClickProvince = async (
    e: React.FormEvent<HTMLDivElement>,
    name: string
  ) => {
    e.preventDefault();
    if (this.state.provinces.pointer !== name) {
      await this.setState(state =>
        produce(state, (draft: State) => {
          draft.search = null;
          // UPDATE PROVINCES STATE
          draft.provinces.pointer = name;
        })
      );
      // UPDATE URL
      this.props.history.push('/search');
      this.getCitiesFromAPI(name);
    }
  };

  private handleClickCity = async (
    e: React.FormEvent<HTMLDivElement>,
    name: string
  ) => {
    e.preventDefault();
    await this.setState(state =>
      produce(state, (draft: State) => {
        // UPDATE CITIES STATE
        if (draft.cities) draft.cities.pointer = name;
      })
    );
    // UPDATE URL
    const { provinces } = this.state;
    this.props.history.push(
      `/search?type=address&province=${provinces.pointer}&city=${name}`
    );
  };

  private handleDismiss = () => {
    const { location, history } = this.props;
    history.push(`/${location.search ? 'search' : ''}`);
  };
}

export default Search;
