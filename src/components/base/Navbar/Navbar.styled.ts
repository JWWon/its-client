import { Link as _Link } from 'react-router-dom';
import styled from 'theme';

export const Container = styled.div`
  flex-basis: ${({ theme }) => theme.size.container + 2 * theme.space.s}rem;
  padding: 0 ${({ theme }) => theme.space.s}rem;
  height: ${({ theme }) => theme.size.navbar}rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkWrapper = styled.div`
  display: flex;
`;

export const Link = styled(_Link)`
  margin-left: ${({ theme }) => (theme.mobile ? 1.2 : 7.2)}rem;
  p {
    color: ${({ theme }) => theme.color.grayDark};
    font-size: ${({ theme }) => theme.font.size.s}rem;
    font-weight: ${({ theme }) => theme.font.weight.regular};
  }
  &:first-of-type {
    margin-left: 0;
  }
`;
