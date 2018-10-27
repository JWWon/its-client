import _Slider from 'react-slick';
import styled from 'theme';

import arrowGray from 'lib/icons/ic_arrow_gray.svg';

/* Slider Style */
export const slideHeight = (mobile: string | null) => (mobile ? 32 : 58);

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
  flex-direction: ${({ theme }) => (theme.mobile ? 'column' : 'row-reverse')};
  .slick-list {
    flex: 1;
    margin-left: ${({ theme }) => theme.space.s}rem;
    box-shadow: -0.4rem 0.8rem 2rem rgba(0, 0, 0, 0.16);
    height: ${({ theme }) => slideHeight(theme.mobile)}vh !important;
    border-top-left-radius: ${({ theme }) => slideHeight(theme.mobile) / 2}vh;
    border-bottom-left-radius: ${({ theme }) =>
      slideHeight(theme.mobile) / 2}vh;
  }
`;

const dotsWidth = (theme: any) =>
  `calc((100% - ${theme.size.container + 2 * theme.space.s}rem) / 2 - ${
    theme.space.s
  }rem)`;
export const DotsWrapper = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  flex-basis: ${({ theme }) => dotsWidth(theme)};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  padding-left: ${({ theme }) => theme.space.s}rem;
  padding-right: 6.4rem;
  @media screen and (max-width: 1400px) {
    padding-right: ${({ theme }) => theme.space.s}rem;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 2.2rem;
    ul {
      margin: 0;
      padding: 0;
      margin: 1.2rem 0;
      li {
        margin: 1.2rem 0;
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
  width: 100%;
  height: 2.2rem;
  object-fit: contain;
`;
