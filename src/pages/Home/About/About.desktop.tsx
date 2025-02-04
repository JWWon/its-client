import React from 'react';
import * as s from './About.desktop.styled';

import { Section } from 'components/common';
import Pictogram from '../Pictogram';

const About = () => (
  <Section title="'잇츠 교정'이란?">
    <s.Container>
      <div>
        <s.SubTitle>치아교정병원을 선택하는 가장 객관적인 기준</s.SubTitle>
        <s.Context>
          잇츠교정은{' '}
          <s.Important>치과교정과전문의에 의해 설립된 병원</s.Important>만을
          선별하여,
          <br />
          치아교정치료중 발생되는 많은 문제를 해결하기 위해 만들어졌습니다.
        </s.Context>
        <s.MoreButton>
          <p>더보기</p>
          <s.ArrowBlue />
        </s.MoreButton>
      </div>
      <s.PictogramWrapper>
        <Pictogram src={require('lib/icons/ic_access.svg')} title="접근성" />
        <Pictogram src={require('lib/icons/ic_rely.svg')} title="신뢰성" />
        <Pictogram
          src={require('lib/icons/ic_profession.svg')}
          title="전문성"
        />
      </s.PictogramWrapper>
    </s.Container>
  </Section>
);

export default About;
