import styled from 'theme';

interface Props {
  margin: string | null;
}

export const Wrapper = styled<Props, any>('div')`
  display: flex;
  margin: ${({ margin }) => margin || '4rem 0'};
  align-items: center;
`;

const height = 0.8;
export const HrBar = styled.div`
  width: 6rem;
  height: ${height}rem;
  border-radius: ${height / 2}rem;
  background-color: ${({ theme }) => theme.color.blueDark};
  margin-right: 2rem;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.font.size.l}rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;
