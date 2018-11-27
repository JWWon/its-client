import React, { PureComponent } from 'react';
import { isMobile } from 'react-device-detect';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { animateScroll as scroll, Element, scroller } from 'react-scroll';

import { Section } from 'components/common';
import { getSearchFromURL } from 'lib/functions/url';
import { StoreState } from 'store/modules';
import {
  removeResults as removeResultsAPI,
  searchClinic as searchClinicAPI,
  SearchState,
  selectProvince as selectProvinceAPI,
} from 'store/modules/search';

import Banners from './Banners';
import CheckDistrict from './CheckDistrict';
import Result from './Result';
import * as s from './Search.styled';
import SearchBar from './SearchBar';

interface Props extends RouteComponentProps<any> {
  info: SearchState;
  removeResults: () => void;
  selectProvince: (province?: string) => void;
  searchClinic: (query: any) => void;
}

class Search extends PureComponent<Props> {
  private unlisten: (location?: Location) => void;

  public componentDidMount() {
    const { history, location } = this.props;
    this.setState({ isMounted: true });

    this.handleSearchByURL(location);
    this.unlisten = history.listen(this.handleSearchByURL);
  }

  public componentWillUnmount() {
    this.unlisten();
  }

  public render() {
    const { search, provinces, cities } = this.props.info;
    const option: { [x: string]: any } = {};
    if (search && search.type === 'address') {
      option.handleDismiss = this.handleDismiss;
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
              <s.ShadowBox>
                <CheckDistrict
                  title="도 / 특별시"
                  district={provinces}
                  handleClick={this.handleClickProvince}
                />
              </s.ShadowBox>
              <s.ShadowBox>
                <CheckDistrict
                  isCity
                  title="시 / 군 / 구"
                  district={cities}
                  handleClick={this.handleClickCity}
                />
              </s.ShadowBox>
            </s.BoxWrapper>
          </Section>
        )}
        {search && (
          <Element name="result">
            <Section
              title={`'${search.param}' 검색 결과`}
              banner={
                search.banners.length > 0 ? (
                  <Banners list={search.banners} />
                ) : null
              }>
              <s.Notice>
                {search.list.length > 0
                  ? `* 자격증은 왼쪽부터 1.치과교정과전문의, 2대한치과교정학과,
              3.인비절라인인증의 입니다.`
                  : `* 검색 결과가 없습니다`}
              </s.Notice>
              {search.list.map(clinic => (
                <Result key={clinic.id} clinic={clinic} />
              ))}
            </Section>
          </Element>
        )}
      </>
    );
  }

  // *** HANDLE EVENT
  private handleSearchByURL = async (location: any) => {
    const { info, removeResults, searchClinic, selectProvince } = this.props;

    if (location.search) {
      const query = getSearchFromURL(location);
      if (query.type === 'address' && !info.provinces.pointer) {
        // Query has data, Store has no data
        await selectProvince(query.province);
      }
      await searchClinic(query);
      scroller.scrollTo('result', {
        duration: 720,
        smooth: true,
        offset: isMobile ? -80 : -120,
      });
    } else {
      // Store has no data, Query is empty
      if (!info.provinces.pointer || info.cities.pointer) {
        await selectProvince();
      }
      // Remove search data
      if (info.search) await removeResults();
      scroll.scrollToTop({ duration: 720 });
    }
  };

  private handleSumbitKeyword = (
    e: React.FormEvent<HTMLFormElement>,
    keyword: string
  ) => {
    e.preventDefault();
    // UPDATE URL
    this.props.history.replace(`/search?type=keyword&q=${keyword}`);
  };

  private handleClickProvince = async (
    e: React.FormEvent<HTMLDivElement>,
    name: string
  ) => {
    const { info, selectProvince, history } = this.props;
    if (info.provinces.pointer !== name) {
      await selectProvince(name);
      // UPDATE URL
      if (info.search) history.replace('/search');
    }
  };

  private handleClickCity = async (
    e: React.FormEvent<HTMLDivElement>,
    name: string
  ) => {
    const { info, history } = this.props;
    if (info.cities.pointer !== name) {
      // UPDATE URL
      history.replace(
        `/search?type=address&province=${info.provinces.pointer}&city=${name}`
      );
    }
  };

  private handleDismiss = () => {
    const { location, history } = this.props;
    if (location.search) history.replace('/search');
    else history.goBack();
  };
}

export default connect(
  ({ search }: StoreState) => ({ info: search }),
  dispatch => ({
    removeResults: () => removeResultsAPI(dispatch),
    selectProvince: (province?: string) =>
      selectProvinceAPI(province)(dispatch),
    searchClinic: (query: any) => searchClinicAPI(query)(dispatch),
  })
)(Search);
