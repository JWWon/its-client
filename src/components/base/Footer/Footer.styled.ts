import { Link as _Link } from 'react-router-dom';

import facebook from 'lib/logos/logo_facebook.svg';
import instagram from 'lib/logos/logo_instagram.svg';
import twitter from 'lib/logos/logo_twitter.svg';
import styled from 'theme';

export const Container = styled.div`
  flex-basis: ${({ theme }) => theme.size.container + 2 * theme.space.s}rem;
  padding: ${({ theme }) => `${theme.mobile ? 3 : 9}rem ${theme.space.s}rem`};
  display: flex;
  ${({ theme }) => theme.mobile && 'flex-direction: column'};
`;

export const Right = styled.div`
  margin-left: auto;
  display: flex;
  ${({ theme }) =>
    theme.mobile
      ? `justify-content: flex-end;
        align-items: center`
      : `flex-direction: column;
        justify-content: center;
        align-items: flex-end`};
`;

export const Header = styled.div`
  display: flex;
  ${({ theme }) =>
    theme.mobile ? 'margin-right: 2rem' : 'margin-bottom: 2rem'};
`;

export const TextWrapper = styled.div`
  display: flex;
  margin-top: 1.2rem;
  flex-wrap: wrap;
  margin-left: ${({ theme }) => -(theme.mobile ? 1 : 2)}rem;
  p,
  img {
    margin-left: ${({ theme }) => (theme.mobile ? 1 : 2)}rem;
  }
  &:first-of-type {
    margin-top: 0;
  }
`;

export const Copyright = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: ${({ theme }) => (theme.mobile ? 0.8 : 2.4)}rem;
`;

export const InfoText = styled.p`
  font-size: ${({ theme }) => (theme.mobile ? 1.2 : theme.font.size.xs)}rem;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.color.grayDark};
  span {
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

const iconSize = (mobile: string | null) => (mobile ? 1.6 : 3.2);
export const Link = styled.a`
  width: ${({ theme }) => iconSize(theme.mobile)}rem;
  height: ${({ theme }) => iconSize(theme.mobile)}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${({ theme }) => (theme.mobile ? 1.2 : 2)}rem;
  &:first-of-type {
    margin-left: 0;
  }
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const Facebook = styled(Icon).attrs({ src: facebook })``;
export const Instagram = styled(Icon).attrs({ src: instagram })``;
export const Twitter = styled(Icon).attrs({ src: twitter })``;

const btnHeight = (mobile: string | null) => (mobile ? 1.8 : 3.8);
export const Button = styled(_Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => (theme.mobile ? 12 : 20)}rem;
  height: ${({ theme }) => btnHeight(theme.mobile)}rem;
  border-radius: ${({ theme }) => btnHeight(theme.mobile) / 2}rem;
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
