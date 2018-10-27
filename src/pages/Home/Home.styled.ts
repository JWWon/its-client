import _Slider from 'react-slick';
import styled from 'theme';
import mobile from 'theme/mobile';

import arrowGray from 'lib/icons/ic_arrow_gray.svg';

/* Slider Style */
export const slideHeight: number = mobile ? 32 : 58;

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
  flex-direction: ${mobile ? 'column' : 'row-reverse'};
  .slick-list {
    flex: 1;
    margin-left: ${({ theme }) => theme.space.s}rem;
    box-shadow: -0.4rem 0.8rem 2rem rgba(0, 0, 0, 0.16);
    height: ${slideHeight}vh !important;
    border-top-left-radius: ${slideHeight / 2}vh;
    border-bottom-left-radius: ${slideHeight / 2}vh;
  }
`;

const dotsWidth = (theme: any) =>
  `calc((100% - ${theme.size.container + 2 * theme.space.s}rem) / 2 - ${
    theme.space.s
  }rem)`;
const arrowSize: number = mobile ? 1 : 2.2;

export const DotsWrapper = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  flex-basis: ${({ theme }) => (mobile ? '4.8rem' : dotsWidth(theme))};
  display: flex;
  justify-content: ${mobile ? 'center' : 'flex-end'};
  align-items: center;
  box-sizing: border-box;
  padding-left: ${({ theme }) => theme.space.s}rem;
  padding-right: 6.4rem;
  @media screen and (max-width: 1400px) {
    padding-right: ${({ theme }) => theme.space.s}rem;
  }

  div {
    display: flex;
    ${!mobile && `flex-direction: column; width: ${arrowSize}rem`};
    align-items: center;
    ul {
      margin: ${mobile ? '0 0.4rem' : '1.2rem 0'};
      padding: 0;
      li {
        margin: ${mobile ? '0 0.4rem' : '1.2rem 0'};
      }
    }
  }
`;

export const HideArrow = styled.div`
  display: none !important;
`;

export const ArrayGray = styled.img.attrs({
  src: arrowGray,
})`
  width: ${arrowSize}rem;
  height: ${arrowSize}rem;
  object-fit: contain;
  &:first-of-type {
    transform: rotate(${mobile ? 180 : -90}deg);
  }
  &:last-of-type {
    transform: rotate(${mobile ? 0 : 90}deg);
  }
`;
