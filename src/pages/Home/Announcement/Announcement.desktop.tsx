import React from 'react';

import { Section, TitleWithBar } from 'components/common';
import * as s from './Announcement.desktop.styled';
import { Props } from './index';

const Announcement: React.SFC<Props> = ({ list }) => (
  <Section title="왜 '잇츠 교정'인가?">
    <s.Container>
      {list.map(item => (
        <s.Item to={item.url} key={item.title}>
          <s.Image src={item.src} />
          <TitleWithBar title={item.title} margin="5.2rem 0 8rem" />
          <s.Content>{item.content}</s.Content>
        </s.Item>
      ))}
    </s.Container>
  </Section>
);

export default Announcement;
