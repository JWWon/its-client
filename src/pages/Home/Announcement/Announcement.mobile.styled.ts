import { Link } from 'react-router-dom';

import { ShadowBox as _ShadowBox } from 'components/common';
import styled from 'theme';

export const ShadowBox = styled(_ShadowBox).attrs({
  style: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})``;

const space = 1.6;
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.space.s}rem -${space}rem 0;
`;

const imgSize = 9;
export const Item = styled(Link)`
  flex-basis: ${imgSize}rem;
`;

export const Image = styled.img`
  width: ${imgSize}rem;
  height: ${imgSize}rem;
  box-shadow: -0.1rem 0.3rem 0.5rem rgba(0, 0, 0, 0.16);
  object-fit: cover;
`;
