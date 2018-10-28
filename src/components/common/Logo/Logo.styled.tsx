import styled from 'theme';

import logo from 'lib/logos/logo_its_kyojeong.svg';

export const Logo = styled.img.attrs({
  src: logo,
  alt: '잇츠 교정 logo',
})`
  width: ${({ theme }) => (theme.mobile ? 8 : 12.8)}rem;
  height: 5.2rem;
  object-fit: contain;
`;
