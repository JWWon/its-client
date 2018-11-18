// tslint:disable:no-console
import styled from 'styled-components';

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

const convertToStyle = (object, key) => `${key}: ${object[key]};`;

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
  ${({ styles }) =>
    Object.keys(styles).map(key => convertToStyle(styles, key))};
`;
