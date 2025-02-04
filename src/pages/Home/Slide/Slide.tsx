import { Slide } from 'api/image';
import React from 'react';
import { isMobile } from 'react-device-detect';
import * as s from './Slide.styled';

interface Props {
  image: Slide;
}

const Slide: React.SFC<Props> = ({ image }) => (
  <a href={image.href}>
    <s.Slide
      url={isMobile ? image.mobileSrc : image.desktopSrc}
      alt={image.alt}
    />
  </a>
);

export default Slide;
