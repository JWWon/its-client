import React from 'react';
import * as s from './Pictogram.styled';

interface Props {
  src: string;
  title: string;
}

const Pictogram: React.SFC<Props> = ({ src, title }) => (
  <s.ShadowBox>
    <s.Icon src={src} />
    <s.Title>{title}</s.Title>
  </s.ShadowBox>
);

export default Pictogram;
