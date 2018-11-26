// tslint:disable:no-console
import styled from 'theme';
import { isMobile } from 'react-device-detect';

export const Container = styled.div`
  font-size: 1.6rem;
`;

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

export const ImgContainer = styled.div`
  display: flex;
  justify-content: ${({ float }) => convertToFlex(float)};
`;

const convertToStyle = object =>
  Object.keys(object).map(key => `${key}: ${object[key]};`);

export const Image = styled.img.attrs({
  src: ({ src }) => src,
})`
  ${({ styles }) => convertToStyle(styles)};
  /* object-fit: contain; */
`;
