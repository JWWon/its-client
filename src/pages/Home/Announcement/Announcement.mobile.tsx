import React from 'react';

import { Section, TitleWithBar } from 'components/common';
import * as s from './Announcement.mobile.styled';
import { Props } from './index';

const Announcemnet: React.SFC<Props> = ({ list }) => (
  <Section>
    <s.ShadowBox single>
      <TitleWithBar title="왜 '잇츠교정'인가?" margin="1.2rem 0" vertical />
      <s.Container>
        {list.map(item => (
          <s.Item to={item.href} key={item.title}>
            <s.Image src={item.mobileSrc} />
            <TitleWithBar title={item.title} margin="1.2rem 0 0" />
          </s.Item>
        ))}
      </s.Container>
    </s.ShadowBox>
  </Section>
);

export default Announcemnet;
