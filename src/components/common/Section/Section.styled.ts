import styled from 'theme';

const space = (mobile: string | null) => (mobile ? 3 : 10);
export const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => space(theme.mobile)}rem;
  &:last-of-type {
    margin-bottom: ${({ theme }) => space(theme.mobile)}rem;
  }
`;

export const Container = styled.div`
  flex-basis: ${({ theme }) => theme.size.container + 2 * theme.space.s}rem;
  padding: 0 ${({ theme }) => theme.space.s}rem;
`;

const roundHeight = 8;
export const Header = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => !theme.mobile && `height: ${roundHeight}rem`};
  margin-bottom: ${({ theme }) => (theme.mobile ? 2.8 : 9.6)}rem;
`;

export const HalfRound = styled.div`
  position: absolute;
  width: 14rem;
  height: ${roundHeight}rem;
  left: 0;
  background: ${({ theme }) => theme.color.blueDark};
  border-top-right-radius: ${roundHeight / 2}rem;
  border-bottom-right-radius: ${roundHeight / 2}rem;
  box-shadow: 0.9rem 1.5rem 2.5rem rgba(0, 0, 0, 0.16);
  @media screen and (max-width: 1480px) {
    display: none;
  }
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
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.color.grayDark};
  font-size: ${({ theme }) => theme.font.size.s}rem;
  font-weight: ${({ theme }) => theme.font.weight.demiLight};
  margin-left: ${({ theme }) => (theme.mobile ? 1 : 3)}rem;
`;
