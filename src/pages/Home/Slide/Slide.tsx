import { Slide } from 'api/image';
import React from 'react';
import * as s from './Slide.styled';

interface Props {
  image: Slide;
}

const Slide: React.SFC<Props> = ({ image }) => (
  <s.Slide url={image.desktopSrc} alt={image.alt} />
);

export default Slide;
