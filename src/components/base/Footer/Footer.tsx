import React from 'react';

import { Logo } from 'components/common';
import * as s from './Footer.styled';

const Footer: React.SFC<{}> = () => (
  <s.Container>
    <s.Left>
      <s.RowDir>
        <Logo />
        <s.Copyright>
          <s.InfoText>© 2018 잇츠교정</s.InfoText>
        </s.Copyright>
      </s.RowDir>
      <s.RowTextWrapper>
        <s.InfoText>대표 김민재</s.InfoText>
        <s.InfoText>관리자 박찬혁, 오창현</s.InfoText>
        <s.InfoText>사업자번호 566-91-00041</s.InfoText>
      </s.RowTextWrapper>
      <s.RowTextWrapper>
        <s.InfoText>이메일 contacts@itskyojeong.com</s.InfoText>
        <s.InfoText>연락처 02-518-8584</s.InfoText>
      </s.RowTextWrapper>
      <s.RowTextWrapper>
        <s.InfoText>주소 서울시 강남구 청담동 110-13</s.InfoText>
      </s.RowTextWrapper>
    </s.Left>
    <s.Right>
      <s.RowDir>
        <s.Link href="https://www.facebook.com/">
          <s.Facebook />
        </s.Link>
        <s.Link href="https://www.instagram.com/">
          <s.Instagram />
        </s.Link>
        <s.Link href="https://www.twitter.com">
          <s.Twitter />
        </s.Link>
      </s.RowDir>
      <s.Button to="/apply">
        <p>병원 입점 신청하기</p>
      </s.Button>
    </s.Right>
  </s.Container>
);

export default Footer;
