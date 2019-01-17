import { isIE } from 'react-device-detect';
import styled, { selectByDevice } from 'theme';

import logoIE from 'lib/logos/logo_itso_o.png';
import logo from 'lib/logos/logo_itso_o.svg';

export const Logo = styled.img.attrs({
  src: isIE ? logoIE : logo,
  alt: '잇츠 교정 logo',
})`
  width: ${selectByDevice({ m: 100, d: 140 })};
  height: ${selectByDevice({ m: 38, d: 57 })};
  object-fit: contain;
`;
