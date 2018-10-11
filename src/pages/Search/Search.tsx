import produce from 'immer';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ClinicInterface } from 'api/clinic';
import { cities as _cities } from 'assets/constant/address';
import { Section, ShadowBox } from 'components/common';
import CheckDistrict from './CheckDistrict';
import * as s from './Search.styled';

export interface District {
  index: number;
  name: string;
  checked: boolean;
  count?: number;
}

interface Props extends RouteComponentProps<any> {}

interface State {
  search: {
    type: 'keyword' | 'address';
    param: string;
    list: ClinicInterface[];
  } | null;
  cities: {
    pointer: number;
    list: District[];
  };
  provinces: {
    pointer: number;
    list: District[];
  } | null;
}

class Search extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const list = _cities.map((data, index) => ({
      ...data,
      index,
      checked: false,
    }));
    list[0].checked = true;

    this.state = {
      search: null,
      cities: { list, pointer: 0 },
      provinces: null,
    };
  }

  public componentDidMount() {
    const { location } = this.props;
    if (location.search) {
      console.log('has query');
    }
  }

  public render() {
    const { search, cities } = this.state;
    return (
      <>
        <Section
          title={search ? '지역 목록' : '지역으로 검색하기'}
          subtitle={search ? null : '찾으시는 지역을 선택하세요.'}>
          <s.BoxWrapper>
            <ShadowBox>
              <CheckDistrict
                title="도 / 특별시"
                list={cities.list}
                handleClick={this.handleClickCity}
              />
            </ShadowBox>
            <ShadowBox>
              <CheckDistrict
                title="시 / 군 / 구"
                list={[]}
                handleClick={this.handleClickProvince}
              />
            </ShadowBox>
          </s.BoxWrapper>
        </Section>
      </>
    );
  }

  // private getProvincesFromAPI = () => {

  // }

  private handleClickCity = (
    e: React.FormEvent<HTMLDivElement>,
    index: number
  ) => {
    e.preventDefault();
    this.setState(state =>
      produce(state, (draft: State) => {
        const { pointer } = draft.cities;
        draft.cities.list[pointer].checked = false;
        draft.cities.list[index].checked = true;
        draft.cities.pointer = index;
      })
    );
  };

  private handleClickProvince = (
    e: React.FormEvent<HTMLDivElement>,
    index: number
  ) => {
    e.preventDefault();
    this.setState(state =>
      produce(state, (draft: State) => {
        if (draft.provinces) {
          const { pointer } = draft.provinces;
          draft.provinces.list[pointer].checked = false;
          draft.provinces.list[index].checked = true;
          draft.cities.pointer = index;
        }
      })
    );
  };
}

export default Search;
