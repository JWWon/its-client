import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ClinicInterface } from 'api/clinic';
import { cities } from 'assets/constant/address';
import { Section, ShadowBox } from 'components/common';
import CheckAddress from './CheckAddress';
import * as s from './Search.styled';

interface Props extends RouteComponentProps<any> {}

interface State {
  searched: boolean;
  query: string | null;
  address: {
    city: string;
    province: string;
  } | null;
  result: ClinicInterface[] | null;
}

class Search extends Component<Props, State> {
  public state: State = {
    searched: false,
    query: null,
    address: null,
    result: null,
  };

  public componentDidMount() {
    const { location } = this.props;
    this.setState({ searched: location.search.length > 0 });
  }

  public render() {
    const { searched } = this.state;
    return (
      <>
        <Section
          title={searched ? '지역 목록' : '지역으로 검색하기'}
          subtitle={searched ? null : '찾으시는 지역을 선택하세요.'}>
          <s.BoxWrapper>
            <ShadowBox>
              <CheckAddress title="도 / 특별시" list={cities} />
            </ShadowBox>
            <ShadowBox>
              <CheckAddress title="시 / 군 / 구" list={[]} />
            </ShadowBox>
          </s.BoxWrapper>
        </Section>
      </>
    );
  }
}

export default Search;
