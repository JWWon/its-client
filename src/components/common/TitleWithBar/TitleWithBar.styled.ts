import styled from 'theme';

interface Props {
  margin: string | null;
  vertical: boolean;
}

const barHeight = (mobile: string | null) => (mobile ? 0.3 : 0.8);

export const HrBar = styled<Props, any>('div')`
  width: ${({ theme }) => (theme.mobile ? 2 : 6)}rem;
  height: ${({ theme }) => barHeight(theme.mobile)}rem;
  margin-right: ${({ theme }) => (theme.mobile ? 0.6 : 2)}rem;
  ${({ vertical }) =>
    vertical &&
    `width: 3.6rem;
    margin: 1.4rem 0 0`};
  border-radius: ${({ theme }) => barHeight(theme.mobile) / 2}rem;
  background-color: ${({ theme }) => theme.color.blueDark};
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.font.size[theme.mobile ? 'xxl' : 'l']}rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const Wrapper = styled<Props, any>('div')`
  display: flex;
  align-items: center;
  margin: ${({ margin }) => margin || '4rem 0'};
  ${({ vertical }) => vertical && 'flex-direction: column-reverse'};
`;
