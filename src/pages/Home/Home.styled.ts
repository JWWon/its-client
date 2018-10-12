import _Slider from 'react-slick';
import styled from 'theme';

const getLeft = (containerWidth: number) =>
  `calc((100% - ${containerWidth}rem) / 2)`;

export const Slider = styled(_Slider).attrs({
  dots: true,
  fade: true,
  infinite: true,
  autoplay: true,
  adaptiveHeight: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
})`
  display: flex;
  flex-direction: row-reverse;
  .slick-list {
    flex-basis: ${({ theme }) =>
      `calc(100% - ${getLeft(theme.size.desktop.container)})`};
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
  ul {
    width: 2rem;
    margin: 0;
    padding: 0 8rem 0 0;
  }
`;

export const HideArrow = styled.div`
  display: none;
`;
