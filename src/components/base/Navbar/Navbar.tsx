import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Navbar.styled';

const Navbar: React.SFC<{}> = () => (
  <S.Container>
    <Link to="/">
      <S.Logo />
    </Link>
    <S.LinkWrapper>
      <S.Link to="/about">
        <p>잇츠교정이란?</p>
      </S.Link>
      <S.Link to="/search">
        <p>전국 지역 검색</p>
      </S.Link>
      <S.Link to="/announcement">
        <p>왜 잇츠교정인가</p>
      </S.Link>
    </S.LinkWrapper>
  </S.Container>
);

export default Navbar;
