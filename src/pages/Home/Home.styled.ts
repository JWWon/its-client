import _Slider from 'react-slick';
import styled from 'theme';

import arrowBlue from 'assets/icons/ic_arrow_blue.svg';
import arrowGray from 'assets/icons/ic_arrow_gray.svg';

const getLeft = (containerWidth: number) =>
  `calc((100% - ${containerWidth}rem) / 2)`;

export const slideHeight: number = 64;
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
  padding-right: 8rem;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1.6rem;
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
  display: none;
`;

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: ${({ theme }) => theme.font.size.m}rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 4.8rem;
`;

export const Context = styled.p`
  color: ${({ theme }) => theme.color.gray};
  font-size: ${({ theme }) => theme.font.size.s}rem;
  font-weight: ${({ theme }) => theme.font.weight.demiLight};
  line-height: 4rem;
`;

const moreHeight = 5;
export const MoreButton = styled.div`
  display: flex;
  width: 16rem;
  height: ${moreHeight}rem;
  border-radius: ${moreHeight / 2}rem;
  border: 3px solid ${({ theme }) => theme.color.blueDark};
  box-sizing: border-box;
  margin-top: 4.8rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.8rem;
  p {
    color: ${({ theme }) => theme.color.blueDark};
    font-size: ${({ theme }) => theme.font.size.s}rem;
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
  &:hover {
    cursor: pointer;
  }
`;

export const ArrowBlue = styled.img.attrs({
  src: arrowBlue,
})`
  width: auto;
  height: 1.6rem;
`;

export const ArrayGray = styled.img.attrs({
  src: arrowGray,
})`
  width: 100%;
  height: auto;
`;
