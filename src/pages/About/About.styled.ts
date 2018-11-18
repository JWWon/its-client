import { TitleWithBar as _TitleWithBar } from 'components/common';
import { Link as _Link } from 'react-router-dom';
import styled from 'theme';
import mobile from 'theme/mobile';

export const Container = styled.div`
  min-height: 60vh;
  margin-bottom: ${mobile ? 2.4 : 6}rem;
`;

export const TitleWithBar = styled(_TitleWithBar).attrs({
  margin: mobile ? '0.8rem 0' : '0.8rem 0 4rem',
})``;

const linkHeight: number = mobile ? 2.4 : 4.8;

export const Link = styled(_Link).attrs({
  to: '/search',
})`
  margin: 0 auto;
  width: ${mobile ? 10 : 32}rem;
  box-sizing: border-box;
  height: ${linkHeight}rem;
  border-radius: ${linkHeight / 2}rem;
  background: ${({ theme }) => theme.color.blueDark};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.size.m}rem;
  transition: all 0.2s ease-out;
  &:hover {
    background: ${({ theme }) => theme.color.white};
    border: 2px solid ${({ theme }) => theme.color.blueDark};
    color: ${({ theme }) => theme.color.blueDark};
  }
`;
