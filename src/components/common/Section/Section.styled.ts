import styled from 'theme';

export const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 12rem 0;
  &:last-of-type {
    margin-top: 0;
  }
`;

export const Container = styled.div`
  flex-basis: ${({ theme }) => theme.size.desktop.container}rem;
`;

const roundHeight = 8;

export const Header = styled.div`
  height: ${roundHeight}rem;
  display: flex;
  align-items: center;
  margin-bottom: 9.8rem;
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

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.blueDark};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;
