import styled, { selectByDevice } from 'theme';

import logo from 'lib/logos/logo_its_kyojeong.svg';

export const Logo = styled.img.attrs({
  src: logo,
  alt: '잇츠 교정 logo',
})`
  width: ${selectByDevice({ m: 10, d: 14 })};
  height: ${selectByDevice({ m: 3.8, d: 5.7 })};
  object-fit: contain;
`;
