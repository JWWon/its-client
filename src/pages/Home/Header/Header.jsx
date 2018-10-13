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
  </s.Background>
);

export default Header;
