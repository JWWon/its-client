import React from 'react';

import { Section, TitleWithBar } from 'components/common';
import Pictogram from '../Pictogram';
import * as s from './About.mobile.styled';

const About = () => (
  <Section>
    <s.ShadowBox single>
      <TitleWithBar title="'잇츠교정'이란?" margin="1.2rem 0" vertical />
      <s.Context>
        잇츠교정은{' '}
        <s.Important>치과교정과전문의에 의해 설립된 병원</s.Important>만을
        선별하여, 치아교정치료중 발생되는 많은 문제를 해결하기 위해
        만들어졌습니다.
      </s.Context>
      <s.Container>
        <s.PictogramWrapper>
          <Pictogram src={require('lib/icons/ic_access.svg')} title="접근성" />
          <Pictogram src={require('lib/icons/ic_rely.svg')} title="신뢰성" />
          <Pictogram
            src={require('lib/icons/ic_profession.svg')}
            title="전문성"
          />
        </s.PictogramWrapper>
        <s.More>
          <div />
          <p>더보기</p>
          <s.ArrowBlue />
        </s.More>
      </s.Container>
    </s.ShadowBox>
  </Section>
);

export default About;
