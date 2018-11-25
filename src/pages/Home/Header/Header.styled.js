import countUp from 'react-countup';
import { Link } from 'react-router-dom';
import styled, { selectByDevice } from 'theme';

export const Background = styled.div`
  margin-top: ${selectByDevice({ m: 4.8, d: 16 })};
  position: relative;
  height: ${selectByDevice({ m: 8, d: 24 })};
  background-color: ${({ theme }) => theme.color.whiteDark};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const countHeight = { m: 2.2, d: 4.4 };
const barHeight = { m: 5, d: 11 };

export const CountUpWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: ${selectByDevice(barHeight, 0.33)};
  font-size: ${({ theme }) => theme.font.size.xl}rem;
  font-weight: ${({ theme }) => theme.font.weight.demiLight};
  color: ${({ theme }) => theme.color.blueDark};
  div {
    height: ${selectByDevice(countHeight)};
    border-radius: ${selectByDevice(countHeight, 0.5)};
    background: ${({ theme }) => theme.color.blueDark};
    padding: 0 ${selectByDevice({ m: 1.2, d: 2.8 })};
    margin: 0 ${selectByDevice({ m: 0.6, d: 2 })};
    display: flex;
    align-items: center;
  }
`;

export const CountUp = styled(countUp).attrs({
  start: 0,
  decimal: ',',
  duration: 2.7,
  useGrouping: true,
  suffix: ' 개',
})`
  color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const BarPosition = styled.div`
  position: absolute;
  top: -${selectByDevice(barHeight, 0.5)};
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  white-space: nowrap;
`;

export const BarLink = styled(Link).attrs({
  to: '/search',
})`
  flex-basis: ${({ theme }) => theme.size.container + 2 * theme.space.s}rem;
  height: ${selectByDevice(barHeight)};
  margin: 0 ${({ theme }) => theme.space.s}rem;
  box-sizing: border-box;
  border-radius: ${selectByDevice(barHeight, 0.5)};
  background: ${({ theme }) => theme.color.blueDark};
  box-shadow: ${({ theme }) =>
      theme.mobile ? '-0.1rem 0.3rem 0.5rem' : '-1.5rem 2rem 2.5rem'}
    rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  padding-left: ${selectByDevice(barHeight, 0.5)};
  color: ${({ theme }) => theme.color.white};
  transition: all 0.2s ease-out;
  &:hover {
    margin-top: -0.8rem;
    margin-bottom: 0.8rem;
    box-shadow: -2rem 1.9rem 5.2rem rgba(0, 0, 0, 0.32);
  }
`;

export const SearchIcon = styled.img.attrs({
  src: require('lib/icons/ic_search.svg'),
})`
  width: auto;
  height: 40%;
  object-fit: contain;
  margin-right: ${selectByDevice({ m: 1.6, d: 3.2 })};
`;

export const Context = styled.p`
  font-size: ${({ theme }) => theme.font.size.xxl}rem;
  font-weight: ${({ theme }) => theme.font.weight.black};
`;

export const SearchText = styled.p`
  ${({ theme }) => theme.mobile && 'visibility: hidden'};
  margin-left: auto;
  margin-right: 3.2rem;
  font-size: ${({ theme }) => theme.font.size.xl}rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const ArrowCircle = styled.div`
  width: ${selectByDevice(barHeight, 0.64)};
  height: ${selectByDevice(barHeight, 0.64)};
  margin-right: ${selectByDevice(barHeight, 0.18)};
  border-radius: ${selectByDevice(barHeight, 0.32)};
  background: ${({ theme }) => theme.color.white};
  box-shadow: -2rem 3.5rem 3rem rgba(0, 0, 0, 0.16);
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${({ theme }) => theme.color.grayLight};
  }
`;

export const Arrow = styled.img.attrs({
  src: require('lib/icons/ic_arrow_blue.svg'),
})`
  margin-left: 6%;
  width: 32%;
  height: auto
  object-fit: contain;
`;
