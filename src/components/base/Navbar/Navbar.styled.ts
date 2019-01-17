import { Link } from 'react-router-dom';
import styled, { selectByDevice } from 'theme';

export const Container = styled.div`
  flex-basis: ${({ theme }) => theme.size.container + 2 * theme.space.s}px;
  padding: 0 ${({ theme }) => theme.space.s}px;
  height: ${props => selectByDevice(props.theme.size.navbar)(props)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkWrapper = styled.div`
  display: flex;
`;

export const LinkMobile = styled.a`
  margin-left: 12px;
  p {
    color: ${({ theme }) => theme.color.grayDark};
    font-size: ${({ theme }) => theme.font.size.l}rem;
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
  &:first-of-type {
    margin-left: 0;
  }
`;

export const LinkDesktop = styled(Link)`
  margin-left: 72px;
  p {
    color: ${({ theme }) => theme.color.grayDark};
    font-size: ${({ theme }) => theme.font.size.m}rem;
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
  &:first-of-type {
    margin-left: 0;
  }
`;
