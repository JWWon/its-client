import { Link as _Link } from 'react-router-dom';
import styled, { fontSizeByDevice, selectByDevice } from 'theme';

const space = { m: 30, d: 100 };
export const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: ${selectByDevice(space)};
  &:last-of-type {
    margin-bottom: ${selectByDevice(space)};
  }
`;

export const Container = styled.div`
  ${({ theme }) =>
    theme.mobile
      ? `flex: 1`
      : `flex-basis: ${theme.size.container + 2 * theme.space.s}px`};
  padding: 0 ${({ theme }) => theme.space.s}px;
`;

const roundHeight = 80;
export const Header = styled.div`
  display: flex;
  align-items: center;
  ${selectByDevice({ m: '', d: `height: ${roundHeight}px` })};
  margin-bottom: ${selectByDevice({ m: 28, d: 96 })};
  /* ADD FOR IE */
  max-height: 100%;
  box-sizing: border-box;
`;

export const HalfRound = styled.div`
  position: absolute;
  width: 140px;
  height: ${roundHeight}px;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.color.blueDark};
  border-top-right-radius: ${roundHeight / 2}px;
  border-bottom-right-radius: ${roundHeight / 2}px;
  box-shadow: 9px 15px 25px rgba(0, 0, 0, 0.16);
  @media screen and (max-width: 1540px) {
    display: none;
  }
`;

const bannerHeight = { m: 160, d: 280 };
export const BannerArea = styled.div`
  height: ${selectByDevice(bannerHeight)};
`;

export const BannerWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: ${selectByDevice(bannerHeight)};
  background: ${({ theme }) => theme.color.whiteDark};
  display: flex;
  justify-content: center;
`;

const barHeight: number = 3;
export const Bar = styled.div`
  ${selectByDevice({ m: '', d: 'display: none' })};
  width: 36px;
  height: ${barHeight}px;
  border-radius: ${barHeight / 2}px;
  background-color: ${({ theme }) => theme.color.blueDark};
  margin-bottom: ${({ theme }) => theme.space.s}px;
`;

interface TitleInterface {
  massive?: boolean;
}

export const Title = styled<TitleInterface & any>('h1')`
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${({ massive }) => (massive ? 3.6 : 2.6)}rem;
  font-weight: ${({ theme }) => theme.font.weight.black};
  white-space: nowrap;
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: ${fontSizeByDevice('m')};
  font-weight: ${({ theme }) => theme.font.weight.demiLight};
  margin-left: ${selectByDevice({ m: 10, d: 30 })};
`;

export const Link = styled(_Link)`
  display: flex;
  align-items: center;
`;
