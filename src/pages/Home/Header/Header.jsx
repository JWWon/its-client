import React from 'react';
import * as s from './Header.styled';

interface Props {
  count: number;
}

const Header: React.SFC<Props> = ({ count }) => (
  <s.Background>
    <s.BarPosition>
      <s.BarLink>
        <s.SearchIcon />
        <s.Context>잇츠교정 자격치과 빠른 검색</s.Context>
        <s.SearchText>검색하기</s.SearchText>
        <s.ArrowCircle>
          <s.Arrow />
        </s.ArrowCircle>
      </s.BarLink>
    </s.BarPosition>
    <s.CountUpWrapper>
      전국 치과병의원
      <div>
        <s.CountUp end={17000} />
      </div>
      중 기준을 만족하는 오직
      <div>
        <s.CountUp end={count} />
      </div>
      의 치과
    </s.CountUpWrapper>
  </s.Background>
);

export default Header;
