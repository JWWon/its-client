import countUp from 'react-countup';
import { Link } from 'react-router-dom';
import styled from 'theme';

export const Background = styled.div`
  margin-top: ${({ theme }) => (theme.mobile ? 4.8 : 16)}rem;
  position: relative;
  height: ${({ theme }) => (theme.mobile ? 8 : 24)}rem;
  background-color: ${({ theme }) => theme.color.whiteDark};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const countHeight = (mobile: string | null) => (mobile ? 2.2 : 4.4);
const barHeight = (mobile: string | null) => (mobile ? 5 : 11);

export const CountUpWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => barHeight(theme.mobile) / 3}rem;
  font-size: ${({ theme }) => theme.font.size.xl}rem;
  font-weight: ${({ theme }) => theme.font.weight.demiLight};
  color: ${({ theme }) => theme.color.blueDark};
  div {
    height: ${({ theme }) => countHeight(theme.mobile)}rem;
    border-radius: ${({ theme }) => countHeight(theme.mobile) / 2}rem;
    background: ${({ theme }) => theme.color.blueDark};
    padding: 0 ${({ theme }) => (theme.mobile ? 1.2 : 2.8)}rem;
    margin: 0 ${({ theme }) => (theme.mobile ? 0.6 : 2)}rem;
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
  top: -${({ theme }) => barHeight(theme.mobile) / 2}rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ theme }) => theme.size.container + 2 * theme.space.s}rem;
  height: ${({ theme }) => barHeight(theme.mobile)}rem;
  padding: 0 ${({ theme }) => theme.space.s}rem;
  white-space: nowrap;
`;

export const BarLink = styled(Link).attrs({
  to: '/search',
})`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: ${({ theme }) => barHeight(theme.mobile) / 2}rem;
  background: ${({ theme }) => theme.color.blueDark};
  box-shadow: ${({ theme }) =>
      theme.mobile ? '-0.1rem 0.3rem 0.5rem' : '-1.5rem 2rem 2.5rem'}
    rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  padding-left: ${({ theme }) => barHeight(theme.mobile) / 2}rem;
  color: ${({ theme }) => theme.color.white};
`;

export const SearchIcon = styled.img.attrs({
  src: require('lib/icons/ic_search.svg'),
})`
  width: auto;
  height: 40%;
  object-fit: contain;
  margin-right: ${({ theme }) => (theme.mobile ? 1.6 : 3.2)}rem;
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
  width: ${({ theme }) => barHeight(theme.mobile) * 0.64}rem;
  height: ${({ theme }) => barHeight(theme.mobile) * 0.64}rem;
  margin-right: ${({ theme }) => barHeight(theme.mobile) * 0.18}rem;
  border-radius: ${({ theme }) => barHeight(theme.mobile) * 0.32}rem;
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
