import { Link as _Link } from 'react-router-dom';
import styled, { selectByDevice } from 'theme';

export const Container = styled.div`
  flex-basis: ${({ theme }) => theme.size.container + 2 * theme.space.s}rem;
  padding: 0 ${({ theme }) => theme.space.s}rem;
  height: ${props => selectByDevice(props.theme.size.navbar)(props)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkWrapper = styled.div`
  display: flex;
`;

export const Link = styled(_Link)`
  margin-left: ${selectByDevice({ m: 1.2, d: 7.2 })};
  p {
    color: ${({ theme }) => theme.color.grayDark};
    font-size: ${({ theme }) => theme.font.size[theme.mobile ? 'l' : 'm']}rem;
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
  &:first-of-type {
    margin-left: 0;
  }
`;
