// tslint:disable:no-console
import styled from 'styled-components';

const screenWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const convertToFlex = float => {
  switch (float) {
    case 'left':
      return 'flex-start';
    case 'right':
      return 'flex-end';
    default:
      return 'center';
  }
};

const convertToStyle = object =>
  Object.keys(object).map(key => {
    if (key === 'width' && object.width > `${screenWidth}px`) {
      return 'width: 100%';
    }
    return `${key}: ${object[key]};`;
  });

export const Container = styled.div`
  font-size: 1.6rem;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: ${({ float }) => convertToFlex(float)};
`;

export const Image = styled.img.attrs({
  src: ({ src }) => src,
})`
  ${({ styles }) => convertToStyle(styles)};
  object-fit: contain;
`;
