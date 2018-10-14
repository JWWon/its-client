import countUp from 'react-countup';
import { Link } from 'react-router-dom';
import styled from 'theme';

export const Background = styled.div`
  margin-top: 16rem;
  position: relative;
  height: 24rem;
  background-color: ${({ theme }) => theme.color.grayLight};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const countUpHeight: number = 4.8;
const barHeight = 11;

export const CountUpWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: ${barHeight / 3}rem;
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.font.weight.demiLight};
  color: ${({ theme }) => theme.color.blueDark};
  div {
    width: 16rem;
    height: ${countUpHeight}rem;
    border-radius: ${countUpHeight / 2}rem;
    background: ${({ theme }) => theme.color.blueDark};
    margin: 0 2rem;
    display: flex;
    justify-content: center;
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
  top: -${barHeight / 2}rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ theme }) =>
    theme.size.desktop.container + 2 * theme.space.desktop.s}rem;
  height: ${barHeight}rem;
  padding: 0 ${({ theme }) => theme.space.desktop.s}rem;
`;

export const BarBackground = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: ${barHeight / 2}rem;
  background: ${({ theme }) => theme.color.blueDark};
  box-shadow: -1.5rem 2rem 2.5rem rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  padding-left: ${barHeight / 2}rem;
  color: ${({ theme }) => theme.color.white};
`;

export const SearchIcon = styled.img.attrs({
  src: require('assets/icons/ic_search.svg'),
})`
  width: auto;
  height: 40%;
  object-fit: contain;
  margin-right: 3.2rem;
`;

export const Context = styled.p`
  font-size: ${({ theme }) => theme.font.size.xxl}rem;
  font-weight: ${({ theme }) => theme.font.weight.black};
`;

export const SearchText = styled.p`
  margin-left: auto;
  font-size: ${({ theme }) => theme.font.size.xl}rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-right: 3.2rem;
`;

export const ArrowCircle = styled(Link).attrs({
  to: '/search',
})`
  width: ${barHeight * 0.64}rem;
  height: ${barHeight * 0.64}rem;
  margin-right: ${barHeight * 0.18}rem;
  border-radius: ${barHeight * 0.32}rem;
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
  src: require('assets/icons/ic_arrow_blue.svg'),
})`
  margin-left: 6%;
  width: 32%;
  height: auto
  object-fit: contain;
`;
