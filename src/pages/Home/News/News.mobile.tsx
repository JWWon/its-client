import React from 'react';

import { ShadowBox } from 'components/common';
import { Section, TitleWithBar } from 'components/common';
import baseURL from 'lib/constant/baseURL';
import { Props } from './index';
import * as s from './News.mobile.styled';

const Announcemnet: React.SFC<Props> = ({ list }) => (
  <Section>
    <ShadowBox single>
      <s.Link href={`${baseURL}/annoumcement`}>
        <TitleWithBar title="잇츠교정의 선물" margin="1.2rem 0" vertical />
        <s.SubTitle>
          무분별한 허위/과대 광고는 지양합니다.
          <br />
          잇츠교정은 건강한 사회를 지향합니다.
        </s.SubTitle>
      </s.Link>
      <s.Container>
        {list.map(item => (
          <s.Item href={`${baseURL}/announcement#${item.href}`} key={item.id}>
            <s.Image src={item.mobileSrc} className="newsImage" />
            <TitleWithBar title={item.title} margin="1.2rem 0 0" />
          </s.Item>
        ))}
      </s.Container>
    </ShadowBox>
  </Section>
);

export default Announcemnet;
