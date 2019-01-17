import { TitleWithBar as _TitleWithBar } from 'components/common';
import { Link as _Link } from 'react-router-dom';
import styled, { selectByDevice } from 'theme';

export const Container = styled.div`
  margin-bottom: ${selectByDevice({ m: 24, d: 60 })};
`;

export const TitleWithBar = styled(_TitleWithBar).attrs({
  margin: selectByDevice({ m: '8px 0', d: '8px 0 40px' }),
})``;

const linkHeight = { m: 24, d: 48 };
export const Link = styled(_Link).attrs({
  to: '/search',
})`
  margin: 0 auto;
  width: ${selectByDevice({ m: 100, d: 320 })};
  box-sizing: border-box;
  height: ${selectByDevice(linkHeight)};
  border-radius: ${selectByDevice(linkHeight, 0.5)};
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
