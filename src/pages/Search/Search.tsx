import produce from 'immer';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ClinicInterface, getCityInfo } from 'api/clinic';
import { provinceCity, provinces as _provinces } from 'assets/constant/address';
import { Section, ShadowBox } from 'components/common';
import CheckDistrict from './CheckDistrict';
import * as s from './Search.styled';

export interface District {
  index: number;
  name: string;
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
    pointer: number;
    list: District[];
  };
  cities: {
    pointer: number;
    list: District[];
  } | null;
}

class Search extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const list = _provinces.map((data, index) => ({
      ...data,
      index,
      selected: false,
    }));
    list[0].selected = true;

    this.state = {
      provinces: { list, pointer: 0 },
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

  public render() {
    const { search, provinces } = this.state;
    return (
      <>
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
                list={[]}
                handleClick={this.handleClickCity}
              />
            </ShadowBox>
          </s.BoxWrapper>
        </Section>
      </>
    );
  }

  private getCitiesFromAPI = async () => {
    const { pointer, list } = this.state.provinces;
    const { name } = list[pointer];

    const updateCity = await getCityInfo(name);
    const cities = { ...provinceCity[name], ...updateCity };
    console.log(cities);
  };

  private handleClickProvince = async (
    e: React.FormEvent<HTMLDivElement>,
    index: number
  ) => {
    e.preventDefault();
    await this.setState(state =>
      produce(state, (draft: State) => {
        const { pointer } = draft.provinces;
        draft.provinces.list[pointer].selected = false;
        draft.provinces.list[index].selected = true;
        draft.provinces.pointer = index;
      })
    );
    this.getCitiesFromAPI();
  };

  private handleClickCity = (
    e: React.FormEvent<HTMLDivElement>,
    index: number
  ) => {
    e.preventDefault();
    this.setState(state =>
      produce(state, (draft: State) => {
        if (draft.cities) {
          const { pointer } = draft.cities;
          draft.cities.list[pointer].selected = false;
          draft.cities.list[index].selected = true;
          draft.cities.pointer = index;
        }
      })
    );
  };
}

export default Search;
