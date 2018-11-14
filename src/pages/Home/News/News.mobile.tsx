import React from 'react';

import { Section, TitleWithBar } from 'components/common';
import { Props } from './index';
import * as s from './News.mobile.styled';

const Announcemnet: React.SFC<Props> = ({ list }) => (
  <Section>
    <s.ShadowBox single>
      <TitleWithBar title="잇츠교정의 선물" margin="1.2rem 0" vertical />
      <s.Container>
        {list.map(item => (
          <s.Item to={item.href} key={item.id}>
            <s.Image src={item.mobileSrc} />
            <TitleWithBar title={item.title} margin="1.2rem 0 0" />
          </s.Item>
        ))}
      </s.Container>
    </s.ShadowBox>
  </Section>
);

export default Announcemnet;
