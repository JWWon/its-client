import countUp from 'react-countup';
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

const height: number = 4.8;

export const CountUpWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.font.weight.demiLight};
  color: ${({ theme }) => theme.color.blueDark};
  div {
    width: 16rem;
    height: ${height}rem;
    border-radius: ${height / 2}rem;
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
`;
