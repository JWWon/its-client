import styled from 'theme';

interface Props {
  margin: string | null;
  barPosition: 'top' | 'bottom';
}

const barHeight = (mobile: string | null) => (mobile ? 0.3 : 0.8);

export const HrBar = styled<Props, any>('div')`
  width: ${({ theme }) => (theme.mobile ? 2 : 6)}rem;
  height: ${({ theme }) => barHeight(theme.mobile)}rem;
  border-radius: ${({ theme }) => barHeight(theme.mobile) / 2}rem;
  background-color: ${({ theme }) => theme.color.blueDark};

  ${({ barPosition }) =>
    barPosition
      ? `width: 3.6rem;
      margin: 1.4rem 0;
      margin-${barPosition}: 0`
      : 'margin-right: 2rem'};
`;

export const Title = styled<Props, any>('h3')`
  white-space: nowrap;
  color: ${({ theme }) => theme.color.blueDark};
  font-size: ${({ theme }) => theme.font.size[theme.mobile ? 'xxl' : 'l']}rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const Wrapper = styled<Props, any>('div')`
  display: flex;
  align-items: center;
  margin: ${({ margin }) => margin || '4rem 0'};
  ${({ theme, barPosition }) =>
    theme.mobile && barPosition && barPosition === 'bottom'
      ? 'flex-direction: column-reverse'
      : 'flex-direction: column; align-items: flex-start'};
`;
