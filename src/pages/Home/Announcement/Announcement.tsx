import { Section, TitleWithBar } from 'components/common';
import React from 'react';

import * as s from './Announcement.styled';

interface Item {
  src: string;
  title: string;
  content: string;
  url: string;
}

interface Props {
  list: Item[];
}

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
