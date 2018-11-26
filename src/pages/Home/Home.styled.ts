import _Slider from 'react-slick';
import styled, { selectByDevice } from 'theme';

import { windowHalfSpace } from 'lib/functions/space';
import arrowGray from 'lib/icons/ic_arrow_gray.svg';

/* Slider Style */
interface SliderInterface {
  single: boolean;
}

export const slideHeight = { m: 52, d: 58 };

export const Slider = styled(_Slider).attrs<SliderInterface, any>({
  dots: true,
  fade: true,
  infinite: true,
  autoplay: true,
  adaptiveHeight: true,
  swipeToSlide: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 4000,
})`
  display: flex;
  flex-direction: ${selectByDevice({ m: 'column', d: 'row-reverse' })};
  margin-left: ${({ theme, single }) =>
    !theme.mobile && single && windowHalfSpace(theme)};
  .slick-list {
    flex: 1;
    margin-left: ${({ theme }) => theme.space.s}rem;
    box-shadow: -0.4rem 0.8rem 2rem rgba(0, 0, 0, 0.16);
    height: ${selectByDevice(slideHeight, 1, 'vh')} !important;
    border-top-left-radius: ${selectByDevice(slideHeight, 0.5, 'vh')};
    border-bottom-left-radius: ${selectByDevice(slideHeight, 0.5, 'vh')};
  }
`;

const arrowSize = { m: 1, d: 2.2 };
export const DotsWrapper = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  flex-basis: ${({ theme }) =>
    theme.mobile ? '4.8rem' : windowHalfSpace(theme)};
  display: flex;
  justify-content: ${selectByDevice({ m: 'center', d: 'flex-end' })};
  align-items: center;
  box-sizing: border-box;
  padding-left: ${({ theme }) => theme.space.s}rem;
  padding-right: 6.4rem;
  @media screen and (max-width: 1400px) {
    padding-right: ${({ theme }) => theme.space.s}rem;
  }

  div {
    display: flex;
    ${({ theme }) =>
      !theme.mobile && `flex-direction: column; width: ${arrowSize.d}rem`};
    align-items: center;
    ul {
      margin: ${selectByDevice({ m: '0 0.4rem', d: '1.2rem 0' })};
      padding: 0;
      li {
        margin: ${selectByDevice({ m: '0 0.4rem', d: '1.2rem 0' })};
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
  width: ${selectByDevice(arrowSize)};
  height: ${selectByDevice(arrowSize)};
  object-fit: contain;
  &:first-of-type {
    transform: rotate(${selectByDevice({ m: 180, d: -90 }, 1, 'deg')});
  }
  &:last-of-type {
    transform: rotate(${selectByDevice({ m: 0, d: 90 }, 1, 'deg')});
  }
`;
