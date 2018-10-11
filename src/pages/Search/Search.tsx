import { Section, ShadowBox } from 'components/common';
import React, { Component } from 'react';
import * as s from './Search.styled';

class Search extends Component {
  public render() {
    return (
      <>
        <Section
          title="지역으로 검색하기"
          subtitle="찾으시는 지역을 선택하세요.">
          <s.BoxWrapper>
            <ShadowBox>
              <div>
                <p>search</p>
              </div>
            </ShadowBox>
            <ShadowBox>
              <div>
                <p>search</p>
              </div>
            </ShadowBox>
          </s.BoxWrapper>
        </Section>
      </>
    );
  }
}

export default Search;
