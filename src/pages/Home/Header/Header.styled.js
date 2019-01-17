import countUp from 'react-countup';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import styled, { fontSizeByDevice, selectByDevice } from 'theme';
import baseURL from 'lib/constant/baseURL';

export const Background = styled.div`
  margin-top: ${selectByDevice({ m: 48, d: 160 })};
  position: relative;
  height: ${selectByDevice({ m: 80, d: 240 })};
  background-color: ${({ theme }) => theme.color.whiteDark};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const countHeight = { m: 22, d: 44 };
const barHeight = { m: 50, d: 110 };

export const CountUpWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: ${selectByDevice(barHeight, 0.33)};
  font-size: ${fontSizeByDevice('xl')};
  font-weight: ${({ theme }) => theme.font.weight.demiLight};
  color: ${({ theme }) => theme.color.blueDark};
  div {
    height: ${selectByDevice(countHeight)};
    border-radius: ${selectByDevice(countHeight, 0.5)};
    background: ${({ theme }) => theme.color.blueDark};
    padding: 0 ${selectByDevice({ m: 12, d: 28 })};
    margin: 0 ${selectByDevice({ m: 6, d: 20 })};
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

// *** BARLINK COMPONENT
const BarLinkDesktop = styled(Link).attrs({
  to: '/search',
})`
  flex-basis: ${({ theme }) => theme.size.container + 2 * theme.space.s}px;
  height: ${selectByDevice(barHeight)};
  margin: 0 ${({ theme }) => theme.space.s}px;
  box-sizing: border-box;
  border-radius: ${selectByDevice(barHeight, 0.5)};
  background: ${({ theme }) => theme.color.blueDark};
  box-shadow: '-15px 20px 25px' rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  padding-left: ${selectByDevice(barHeight, 0.5)};
  color: ${({ theme }) => theme.color.white};
  transition: all 0.2s ease-out;
  &:hover {
    margin-top: -8px;
    margin-bottom: 8px;
    box-shadow: -20px 19px 52px rgba(0, 0, 0, 0.32);
  }
`;

const BarLinkMobile = styled.a.attrs({
  href: `${baseURL}/search`,
})`
  flex-basis: ${({ theme }) => theme.size.container + 2 * theme.space.s}px;
  height: ${selectByDevice(barHeight)};
  margin: 0 ${({ theme }) => theme.space.s}px;
  box-sizing: border-box;
  border-radius: ${selectByDevice(barHeight, 0.5)};
  background: ${({ theme }) => theme.color.blueDark};
  box-shadow: '-1px 3px 5px' rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  padding-left: ${selectByDevice(barHeight, 0.5)};
  color: ${({ theme }) => theme.color.white};
  transition: all 0.2s ease-out;
  &:hover {
    margin-top: -8px;
    margin-bottom: 8px;
    box-shadow: -20px 19px 52px rgba(0, 0, 0, 0.32);
  }
`;

export const BarLink = isMobile ? BarLinkMobile : BarLinkDesktop;
// *** BARLINK COMPONENT END

export const SearchIcon = styled.img.attrs({
  src: require('lib/icons/ic_search.svg'),
})`
  width: auto;
  height: 40%;
  object-fit: contain;
  margin-right: ${selectByDevice({ m: 16, d: 32 })};
`;

export const Context = styled.p`
  font-size: ${fontSizeByDevice('xxl')};
  font-weight: ${({ theme }) => theme.font.weight.black};
`;

export const SearchText = styled.p`
  ${({ theme }) => theme.mobile && 'visibility: hidden'};
  margin-left: auto;
  margin-right: 32px;
  font-size: ${fontSizeByDevice('xl')};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const ArrowCircle = styled.div`
  width: ${selectByDevice(barHeight, 0.64)};
  height: ${selectByDevice(barHeight, 0.64)};
  margin-right: ${selectByDevice(barHeight, 0.18)};
  border-radius: ${selectByDevice(barHeight, 0.32)};
  background: ${({ theme }) => theme.color.white};
  box-shadow: -20px 35px 30px rgba(0, 0, 0, 0.16);
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
