import React from 'react';

import { Section, ShadowBox, TitleWithBar } from 'components/common';
import * as s from './About.styled';

const About = () => (
  <Section title="잇츠교정이란?">
    <s.Container>
      <ShadowBox>
        <TitleWithBar
          title="치아 교정병원을 선택하는 가장 객관적인 기준"
          margin="0.8rem 0 4rem"
        />
        <div>
          <p>HELLO</p>
        </div>
      </ShadowBox>
    </s.Container>
  </Section>
);

export default About;
