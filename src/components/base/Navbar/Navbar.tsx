import React from 'react';
import { isMobile } from 'react-device-detect';

import { Logo } from 'components/common';
import baseURL from 'lib/constant/baseURL';
import * as s from './Navbar.styled';

const Link = ({ path, text }: { path: string; text: string }) =>
  isMobile ? (
    <s.LinkMobile href={`${baseURL}${path}`}>
      <p>{text}</p>
    </s.LinkMobile>
  ) : (
    <s.LinkDesktop to={path}>
      <p>{text}</p>
    </s.LinkDesktop>
  );

const Navbar: React.SFC<{}> = () => (
  <s.Container>
    <Logo />
    <s.LinkWrapper>
      <Link path="/about" text="잇츠교정이란" />
      <Link path="/search" text="전국 지역 검색" />
      <Link path="/announcement" text="잇츠교정의 선물" />
    </s.LinkWrapper>
  </s.Container>
);

export default Navbar;
