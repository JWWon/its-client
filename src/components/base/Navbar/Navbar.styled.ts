import { Link as _Link } from 'react-router-dom';
import styled from 'theme';

import logo from 'lib/logos/logo_its_kyojeong.svg';

export const Container = styled.div`
  flex-basis: ${({ theme }) =>
    theme.size.desktop.container + 2 * theme.space.desktop.s}rem;
  padding: 0 ${({ theme }) => theme.space.desktop.s}rem;
  height: ${({ theme }) => theme.size.desktop.navbar}rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img.attrs({
  src: logo,
  alt: '잇츠 교정 logo',
})`
  width: 12.8rem;
  height: 5.2rem;
  object-fit: cover;
`;

export const LinkWrapper = styled.div`
  display: flex;
`;

export const Link = styled(_Link)`
  margin-left: 7.2rem;
  p {
    color: ${({ theme }) => theme.color.grayDark};
    font-size: ${({ theme }) => theme.font.size.s}rem;
    font-weight: ${({ theme }) => theme.font.weight.regular};
  }
  &:first-of-type {
    margin-left: 0;
  }
`;
