import styled, { selectByDevice } from 'theme';

import logo from 'lib/logos/logo_its_kyojeong.svg';

export const Logo = styled.img.attrs({
  src: logo,
  alt: '잇츠 교정 logo',
})`
  width: ${selectByDevice({ m: 8, d: 12.8 })};
  height: ${selectByDevice({ m: 3.1, d: 5.2 })};
  object-fit: contain;
`;
