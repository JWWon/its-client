import React from 'react';

import { Section, TitleWithBar } from 'components/common';
import { Props } from './index';
import * as s from './News.desktop.styled';

const News: React.SFC<Props> = ({ list }) => (
  <Section
    title="잇츠교정의 선물"
    subtitle="무분별한 허위/과대 광고는 지양합니다. 잇츠교정은 건강한 사회를 지향합니다."
    linkTo="/announcement">
    <s.Container>
      {list.map(item => (
        <s.Item to={`announcement#${item.href}`} key={item.id}>
          <s.Image src={item.desktopSrc} />
          <TitleWithBar title={item.title} margin="36px 0 60px" />
          <s.Content>{item.content}</s.Content>
        </s.Item>
      ))}
    </s.Container>
  </Section>
);

export default News;
