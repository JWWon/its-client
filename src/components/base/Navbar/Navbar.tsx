import React from 'react';

import { Logo } from 'components/common';
import * as s from './Navbar.styled';

const Navbar: React.SFC<{}> = () => (
  <s.Container>
    <Logo />
    <s.LinkWrapper>
      <s.Link to="/about">
        <p>잇츠교정이란?</p>
      </s.Link>
      <s.Link to="/search">
        <p>전국 지역 검색</p>
      </s.Link>
      <s.Link to="/announcement">
        <p>왜 잇츠교정인가</p>
      </s.Link>
    </s.LinkWrapper>
  </s.Container>
);

export default Navbar;
