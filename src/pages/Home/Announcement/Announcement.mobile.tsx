import React from 'react';

import { Section, TitleWithBar } from 'components/common';
import * as s from './Announcement.mobile.styled';
import { Props } from './index';

const Announcemnet: React.SFC<Props> = ({ list }) => (
  <Section>
    <s.ShadowBox single>
      <TitleWithBar
        title="왜 '잇츠교정'인가?"
        barPosition="bottom"
        margin="1.2rem 0"
      />
      <s.Container>
        {list.map(item => (
          <s.Item to={item.url} key={item.title}>
            <s.Image src={item.src} />
            <TitleWithBar title={item.title} margin="1.2rem 0 0" />
          </s.Item>
        ))}
      </s.Container>
    </s.ShadowBox>
  </Section>
);

export default Announcemnet;
