import React from 'react';

import { Section, TitleWithBar } from 'components/common';
import * as s from './Announcement.mobile.styled';
import { Props } from './index';

const Announcemnet: React.SFC<Props> = () => (
  <Section>
    <s.ShadowBox single>
      <TitleWithBar
        title="왜 '잇츠교정'인가?"
        barPosition="bottom"
        margin="1.2rem 0"
      />
    </s.ShadowBox>
  </Section>
);

export default Announcemnet;
