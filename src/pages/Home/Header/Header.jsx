import React from 'react';
import * as s from './Header.styled';

const Header = () => (
  <s.Background>
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
    <s.BarPosition>
      <s.BarBackground>
        <s.SearchIcon />
        <s.ArrowCircle>
          <s.Arrow />
        </s.ArrowCircle>
      </s.BarBackground>
    </s.BarPosition>
  </s.Background>
);

export default Header;
