import React from 'react';

import { Section, TitleWithBar } from 'components/common';
import { Props } from './index';
import * as s from './News.desktop.styled';

const Announcement: React.SFC<Props> = ({ list }) => (
  <Section
    title="잇츠교정의 선물"
    subtitle="무분별한 허위/과대 광고는 지양합니다. 잇츠교정은 건강한 사회를 지향합니다.">
    <s.Container>
      {list.map(item => (
        <s.Item to={item.href} key={item.id}>
          <s.Image src={item.desktopSrc} />
          <TitleWithBar title={item.title} margin="3.6rem 0 6rem" />
          <s.Content>{item.content}</s.Content>
        </s.Item>
      ))}
    </s.Container>
  </Section>
);

export default Announcement;
