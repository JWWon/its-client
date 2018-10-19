import { Link as _Link } from 'react-router-dom';

import facebook from 'lib/logos/logo_facebook.svg';
import instagram from 'lib/logos/logo_instagram.svg';
import logo from 'lib/logos/logo_its_kyojeong.svg';
import twitter from 'lib/logos/logo_twitter.svg';
import styled from 'theme';

export const Container = styled.div`
  flex-basis: ${({ theme }) =>
    theme.size.desktop.container + 2 * theme.space.desktop.s}rem;
  padding: 9rem ${({ theme }) => theme.space.desktop.s}rem;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div``;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const RowDir = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const RowTextWrapper = styled.div`
  display: flex;
  margin-top: 1.2rem;
  * {
    margin-left: 2rem;
    &:first-of-type {
      margin-left: 0;
    }
  }
  &:first-of-type {
    margin-top: 0;
  }
`;

export const Logo = styled.img.attrs({
  src: logo,
  alt: '잇츠 교정 logo',
})`
  width: 12.8rem;
  height: 5.2rem;
  object-fit: cover;
`;

export const Copyright = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 2.4rem;
`;

export const InfoText = styled.p`
  font-size: ${({ theme }) => theme.font.size.xs}rem;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.color.grayDark};
`;

export const Link = styled.a`
  width: 2.8rem;
  height: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  img {
    width: auto;
    height: 100%;
    object-fit: contain;
  }
  &:first-of-type {
    margin-left: 0;
  }
`;

export const Facebook = styled.img.attrs({ src: facebook })``;
export const Instagram = styled.img.attrs({ src: instagram })``;
export const Twitter = styled.img.attrs({ src: twitter })``;

export const Button = styled(_Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 3.8rem;
  border-radius: 2rem;
  box-sizing: border-box;
  background: ${({ theme }) => theme.color.blueDark};
  p {
    font-size: ${({ theme }) => theme.font.size.s}rem;
    font-weight: ${({ theme }) => theme.font.weight.demiLight};
    color: ${({ theme }) => theme.color.white};
  }
  &:hover {
    background: transparent;
    border: 0.2rem solid ${({ theme }) => theme.color.blueDark};
    p {
      color: ${({ theme }) => theme.color.blueDark};
    }
  }
  transition: all 0.2s ease-out;
`;
