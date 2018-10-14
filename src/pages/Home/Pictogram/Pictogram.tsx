import ShadowBox from 'components/common/ShadowBox';
import React from 'react';
import * as s from './Pictogram.styled';

interface Props {
  src: string;
  title: string;
}

const Pictogram: React.SFC<Props> = ({ src, title }) => (
  <ShadowBox size={{ width: 10, height: 14 }} dimmer>
    <s.Wrapper>
      <s.Icon src={src} />
      <s.Title>{title}</s.Title>
    </s.Wrapper>
  </ShadowBox>
);

export default Pictogram;
