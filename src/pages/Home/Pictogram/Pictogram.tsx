import React from 'react';
import * as s from './Pictogram.styled';

interface Props {
  src: string;
  title: string;
}

const Pictogram: React.SFC<Props> = ({ src, title }) => (
  <s.Wrapper>
    <s.Icon src={src} />
    <s.Title>{title}</s.Title>
  </s.Wrapper>
);

export default Pictogram;
