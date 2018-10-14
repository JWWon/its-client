import React from 'react';
import * as s from './Header.styled';

const Header = () => (
  <s.Background>
    <s.BarPosition>
      <s.BarBackground>
        <s.SearchIcon />
        <s.Context>잇츠교정 멤버스 전국 지역 검색</s.Context>
        <s.SearchText>검색하기</s.SearchText>
        <s.ArrowCircle>
          <s.Arrow />
        </s.ArrowCircle>
      </s.BarBackground>
    </s.BarPosition>
    <s.CountUpWrapper>
      전국 치과병의원
      <div>
        <s.CountUp end={17000} />
      </div>
      중 기준을 만족하는
      <div>
        <s.CountUp end={1251} />
      </div>
      의 치과
    </s.CountUpWrapper>
  </s.Background>
);

export default Header;
