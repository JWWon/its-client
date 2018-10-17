import { Link as _Link } from 'react-router-dom';
import styled from 'theme';

export const Container = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
`;

const linkHeight = 4.8;

export const Link = styled(_Link).attrs({
  to: '/search',
})`
  margin: 0 auto;
  width: 32rem;
  box-sizing: border-box;
  height: ${linkHeight}rem;
  border-radius: ${linkHeight / 2}rem;
  background: ${({ theme }) => theme.color.blueDark};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.size.m}rem;
  &:hover {
    background: ${({ theme }) => theme.color.white};
    border: 2px solid ${({ theme }) => theme.color.blueDark};
    color: ${({ theme }) => theme.color.blueDark};
    transition: all 0.2s ease-out;
  }
`;
