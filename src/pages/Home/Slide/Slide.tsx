import React from 'react';
import * as s from './Slide.styled';

interface Props {
  url: string;
}

const Slide: React.SFC<Props> = ({ url, ...props }) => (
  <s.Slide url={url} {...props} />
);

export default Slide;
