import _Slider from 'react-slick';
import styled from 'theme';

import arrowGray from 'lib/icons/ic_arrow_gray.svg';

/* Slider Style */
const getLeft = (containerWidth: number) =>
  `calc((100% - ${containerWidth}rem) / 2)`;

export const slideHeight: number = 58;
export const Slider = styled(_Slider).attrs({
  dots: true,
  fade: true,
  infinite: true,
  autoplay: true,
  adaptiveHeight: true,
  swipeToSlide: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
})`
  display: flex;
  flex-direction: row-reverse;
  .slick-list {
    flex-basis: ${({ theme }) =>
      `calc(100% - ${getLeft(theme.size.desktop.container)})`};
    box-shadow: -0.4rem 0.8rem 2rem rgba(0, 0, 0, 0.16);
    height: ${slideHeight}vh !important;
    border-top-left-radius: ${slideHeight / 2}vh;
    border-bottom-left-radius: ${slideHeight / 2}vh;
  }
`;

export const DotsWrapper = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-basis: ${({ theme }) => getLeft(theme.size.desktop.container)};
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1.6rem;
    padding-left: ${({ theme }) => theme.space.desktop.s}rem;
    padding-right: 8rem;
  }
  @media screen and (max-width: 1480px) {
    div {
      padding-right: 4rem;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    margin: 1.2rem 0;
    li {
      margin: 1.2rem 0;
    }
  }
`;

export const HideArrow = styled.div`
  display: none !important;
`;

export const ArrayGray = styled.img.attrs({
  src: arrowGray,
})`
  width: 100%;
  height: 2.2rem;
  object-fit: contain;
`;
