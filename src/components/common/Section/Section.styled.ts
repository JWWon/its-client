import styled from 'theme';
import mobile from 'theme/mobile';

const space: number = mobile ? 3 : 10;
export const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: ${space}rem;
  &:last-of-type {
    margin-bottom: ${space}rem;
  }
`;

export const Container = styled.div`
  ${({ theme }) =>
    mobile
      ? `flex: 1`
      : `flex-basis: ${theme.size.container + 2 * theme.space.s}rem`};
  padding: 0 ${({ theme }) => theme.space.s}rem;
`;

const roundHeight = 8;
export const Header = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => !theme.mobile && `height: ${roundHeight}rem`};
  margin-bottom: ${({ theme }) => (theme.mobile ? 2.8 : 9.6)}rem;
  /* ADD FOR IE */
  max-height: 100%;
  box-sizing: border-box;
`;

export const HalfRound = styled.div`
  position: absolute;
  width: 14rem;
  height: ${roundHeight}rem;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.color.blueDark};
  border-top-right-radius: ${roundHeight / 2}rem;
  border-bottom-right-radius: ${roundHeight / 2}rem;
  box-shadow: 0.9rem 1.5rem 2.5rem rgba(0, 0, 0, 0.16);
  @media screen and (max-width: 1540px) {
    display: none;
  }
`;

const bannerHeight: number = mobile ? 16 : 28;
export const BannerArea = styled.div`
  height: ${bannerHeight}rem;
`;

export const BannerWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: ${bannerHeight}rem;
  background: ${({ theme }) => theme.color.whiteDark};
  display: flex;
  justify-content: center;
`;

const barHeight: number = 0.3;
export const Bar = styled.div`
  ${({ theme }) => !theme.mobile && 'display: none'};
  width: 3.6rem;
  height: ${barHeight}rem;
  border-radius: ${barHeight / 2}rem;
  background-color: ${({ theme }) => theme.color.blueDark};
  margin-bottom: ${({ theme }) => theme.space.s}rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.font.size.xl}rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  white-space: nowrap;
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: ${({ theme }) => theme.font.size.s}rem;
  font-weight: ${({ theme }) => theme.font.weight.demiLight};
  margin-left: ${({ theme }) => (theme.mobile ? 1 : 3)}rem;
`;
