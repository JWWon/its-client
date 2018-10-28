import React from 'react';

import { Logo } from 'components/common';
import mobile from 'theme/mobile';
import * as s from './Footer.styled';

interface TextInterface {
  [title: string]: string;
}

const business = {
  대표: '김민재',
  관리자: '박찬혁, 오창현',
  사업자번호: '566-91-00041',
};
const contact = { 이메일: 'contacts@itskyojeong.com', 연락처: '02-518-8584' };
const address = { 주소: '서울시 강남구 청담동 110-13' };

const TextBundle = (bundle: TextInterface) => (
  <s.TextWrapper>
    {Object.keys(bundle).map(key => (
      <s.InfoText key={key}>
        <span>{key}</span> {bundle[key]}
      </s.InfoText>
    ))}
  </s.TextWrapper>
);

const Footer: React.SFC<{}> = () => (
  <s.Container>
    <div>
      <s.Header>
        <Logo />
        <s.Copyright>
          <s.InfoText>© 2018 잇츠교정</s.InfoText>
        </s.Copyright>
      </s.Header>
      {mobile ? (
        TextBundle({ ...business, ...contact, ...address })
      ) : (
        <>
          {TextBundle(business)}
          {TextBundle(contact)}
          {TextBundle(address)}
        </>
      )}
    </div>
    <s.Right>
      <s.Header>
        <s.Link href="https://www.facebook.com/">
          <s.Facebook />
        </s.Link>
        <s.Link href="https://www.instagram.com/">
          <s.Instagram />
        </s.Link>
        <s.Link href="https://www.twitter.com">
          <s.Twitter />
        </s.Link>
      </s.Header>
      <s.Button to="/apply">
        <p>병원 입점 신청하기</p>
      </s.Button>
    </s.Right>
  </s.Container>
);

export default Footer;
